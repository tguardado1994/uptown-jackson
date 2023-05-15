import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-green">
      <div class="container-fluid">
        <a class="navbar-brand text-white underline-hover" routerLink="/"
          >Uptown Jackson</a
        >
        <button
          class="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <ng-container *ngIf="user$ | async as user; else showAuthLinks">
              <li class="nav-item">
                <a
                  class="nav-link text-white underline-hover"
                  routerLink="account"
                  >Account</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white underline-hover"
                  (click)="userService.logout()"
                  style="cursor: pointer;"
                  >Logout</a
                >
              </li>
            </ng-container>
            <ng-template #showAuthLinks>
              <li class="nav-item">
                <a
                  class="nav-link text-white underline-hover"
                  aria-current="page"
                  routerLink="login"
                  >Login</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white underline-hover"
                  routerLink="signup"
                  >Create Account</a
                >
              </li>
            </ng-template>

            <li class="nav-item">
              <a
                class="nav-link text-white underline-hover"
                routerLink="buildings"
                >Buildings</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
})
export class NavComponent implements OnInit {
  public user$ = this.userService.user.pipe(shareReplay(1));
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
