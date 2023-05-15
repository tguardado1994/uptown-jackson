import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './shared/services/user.service';
import { ToastService } from './shared/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'uptown-jackson';
  constructor(private cookieService: CookieService, public userService: UserService, public toastService: ToastService){}

  ngOnInit(): void {
    const token = this.cookieService.get('token')
    if (token) {
      this.userService.autoLogin()
    } else return
  }
}
