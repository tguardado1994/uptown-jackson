import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  catchError,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUser, User, UserResponse } from '../interfaces/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user = new BehaviorSubject<User | null>(null);
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly user: Observable<User | null> = this._user.asObservable();
  public readonly loading: Observable<boolean> = this._loading.asObservable();

  BASE_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  public get getCurrentUser(): User | null {
    return this._user.value;
  }

  public setUser(userCredentials: UserResponse<User>) {
    const user = {
      email: userCredentials.resource_owner.email,
    };
    this.cookieService.set('token', userCredentials.token, {
      expires: userCredentials.expires_in,
    });
    this.cookieService.set('refresh_token', userCredentials.refresh_token);
    this._user.next(user);
  }

  createUser(user: CreateUser) {
    return this.http.post<UserResponse<User>>(
      this.BASE_URL + '/users/tokens/sign_up',
      user
    );
  }

  login(email: string, password: string) {
    return this.http.post<UserResponse<User>>(
      this.BASE_URL + '/users/tokens/sign_in',
      { email, password }
    );
  }

  refreshToken(): Observable<UserResponse<User>> {
    const refreshToken = this.cookieService.get('refresh_token');
    if (refreshToken) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${refreshToken}`,
      });
      return this.http.post<UserResponse<User>>(
        this.BASE_URL + '/users/tokens/refresh',
        {},
        { headers: headers }
      );
    }
    return EMPTY;
  }

  autoLogin() {
    const token = this.cookieService.get('token');
    if (token) {
      this._loading.next(true);
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      this.http
        .get<User>(this.BASE_URL + '/users/tokens/info', { headers: headers })
        .pipe(
          switchMap((res: User) => {
            this._user.next({ email: res.email });
            this._loading.next(false);
            return of(this.user);
          }),
          catchError((err) => {
            this._loading.next(false);
            if (err.status === 401) {
              return this.refreshToken().pipe(
                switchMap((res) => {
                  this.setUser(res);
                  return of(this.autoLogin());
                })
              );
            } else {
              this.logout();
              return throwError(() => new Error('Cant refresh token'));
            }
          })
        )
        .subscribe({
          error: (err) => console.log(err),
        });
    }
  }

  logout() {
    this._user.next(null);
    this.cookieService.deleteAll();
    this.router.navigate(['']);
  }
}
