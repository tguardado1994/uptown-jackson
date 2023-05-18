import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './shared/services/user.service';
import { ToastService } from './shared/services/toast.service';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { LandingComponent } from './features/landing/landing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'uptown-jackson';
  showNavbar = true;

  constructor(
    private cookieService: CookieService,
    public userService: UserService,
    public toastService: ToastService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        ),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
      )
      .subscribe((route) => {
        this.showNavbar = route.component !== LandingComponent;
        console.log(this.showNavbar);
      });

    const token = this.cookieService.get('token');
    if (token) {
      this.userService.autoLogin();
    } else return;
  }
}
