import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="flex justify-between flex-wrap bg-green-600 p-6 shadow-xl">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a
          class="font-semibold text-xl tracking-tight underline-hover cursor-pointer"
          routerLink="/"
        >
          <h3 class="sm:text-3xl text-xl font-semibold dark:text-white">
            Uptown Jackson
          </h3>
        </a>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          (click)="toggleNavbar()"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="flex-grow lg:block hidden"></div>
      <div
        [ngClass]="isNavbarOpen ? 'block' : 'hidden'"
        class="w-full block lg:flex lg:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow">
          <ng-container *ngIf="user$ | async as user; else showAuthLinks">
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 underline-hover cursor-pointer"
              routerLink="account"
            >
              <h4 class="sm:text-2xl text-lg font-semibold dark:text-white">
                Account
              </h4>
            </a>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 underline-hover cursor-pointer"
              (click)="userService.logout()"
            >
              <h4 class="sm:text-2xl text-lg font-semibold dark:text-white">
                Logout
              </h4>
            </a>
          </ng-container>
          <ng-template #showAuthLinks>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 underline-hover cursor-pointer"
              routerLink="login"
            >
              <h4 class="sm:text-2xl text-lg font-semibold dark:text-white">
                Login
              </h4>
            </a>
            <a
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 underline-hover cursor-pointer"
              routerLink="signup"
            >
              <h4 class="sm:text-2xl text-lg font-semibold dark:text-white">
                Create Account
              </h4>
            </a>
          </ng-template>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6 underline-hover cursor-pointer"
            routerLink="buildings"
          >
            <h4 class="sm:text-2xl text-lg font-semibold dark:text-white">
              Buildings
            </h4>
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class NavComponent implements OnInit {
  public user$ = this.userService.user.pipe(shareReplay(1));
  public isNavbarOpen = false;

  constructor(public userService: UserService) {}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  ngOnInit(): void {}
}
