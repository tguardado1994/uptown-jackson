import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUser, User, UserResponse } from '../interfaces/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user = new BehaviorSubject<User | null>(null);
  public readonly user: Observable<User | null> = this._user.asObservable();

  BASE_URL = environment.API_URL

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {}

  public get getCurrentUser(): User | null {
    return this._user.value;
  }

  public setUser(userCredentials: UserResponse<User>) {
    const user = {
      email: userCredentials.resource_owner.email,
    }
    this.cookieService.set('token', userCredentials.token, {expires: userCredentials.expires_in})
    this.cookieService.set('refresh_token', userCredentials.refresh_token)
    this._user.next(user)
  }

  createUser(user: CreateUser){
    return this.http.post<UserResponse<User>>(this.BASE_URL + '/users/tokens/sign_up', user)
  }

  login(email: string, password: string) {
    return this.http.post<UserResponse<User>>(this.BASE_URL + '/users/tokens/sign_in', {email, password})
  }

  autoLogin() {
    const token = this.cookieService.get('token')
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      this.http.get<User>(this.BASE_URL + '/users/tokens/info', {headers: headers}).subscribe({
        next: (res: User) => {
          this._user.next({email: res.email})
          this.router.navigate(['/buildings'])
        },
        error: (err) => this.router.navigate(['']),
        complete: () => console.log('completed')
      })
    }
  }

  logout() {
    this._user.next(null)
    this.cookieService.deleteAll()
    this.router.navigate([''])
  }
}
