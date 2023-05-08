import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  createUser(user: any){
    return this.http.post(this.BASE_URL + '/users/create', {user: user})
  }
}
