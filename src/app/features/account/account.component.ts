import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable, map, tap } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AnimationsModule } from 'src/app/shared/modules/animations.module';

@Component({
  selector: 'app-account',
  template: `
    <div
      [@fade]
      *ngIf="user$ | async"
      class="container mx-auto px-4 py-6 rounded-xl shadow-2xl max-w-xl mt-8 relative"
    >
      <div
        class="absolute top-4 right-4 hover:ring-2 hover:ring-green-600 transition-all ease-in-out duration-150 rounded-full p-1 cursor-pointer"
        (click)="toggleEdit()"
        [ngClass]="{ 'text-green-600 ring-2 ring-green-600': isEditing }"
      >
        <app-pencil-icon
          [@fade]
          *ngIf="!isEditing; else closeIcon"
        ></app-pencil-icon>
        <ng-template #closeIcon>
          <app-close-icon [@fade]></app-close-icon>
        </ng-template>
      </div>
      <form
        [formGroup]="accountForm"
        (ngSubmit)="onSubmit()"
        #form="ngForm"
        class="flex flex-col gap-6"
      >
        <div class="flex flex-col justify-evenly items-center md:flex-row">
          <img
            src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            class="rounded-full h-20 w-20 md:h-32 md:w-32"
          />
          <h2
            class="text-2xl font-extrabold dark:text-white text-center md:text-right pr-4 md:text-4xl"
          >
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-green-400"
            >
              Company Name
            </span>
          </h2>
        </div>

        <div class="flex justify-evenly md:flex-row gap-2 md:gap-0 flex-col">
          <div>
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <app-email-icon></app-email-icon>
              </div>
              <input
                type="text"
                id="email"
                class="bg-gray-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                formControlName="email"
                [ngClass]="{ 'border-gray-900': isEditing }"
              />
            </div>
          </div>
          <div>
            <label
              for="phone"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Phone number</label
            >
            <!-- <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="555-555-5555"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            /> -->
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <app-phone-icon></app-phone-icon>
              </div>
              <input
                type="text"
                id="phone"
                class="bg-gray-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                formControlName="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                [ngClass]="{ 'border-gray-900': isEditing }"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-evenly md:flex-row gap-2 md:gap-0 flex-col">
          <div>
            <label
              for="firstName"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >First Name</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <app-clipboard-icon></app-clipboard-icon>
              </div>
              <input
                type="text"
                id="firstName"
                class="bg-gray-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                formControlName="firstName"
                [ngClass]="{ 'border-gray-900': isEditing }"
              />
            </div>
          </div>
          <div>
            <label
              for="lastName"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Last Name</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <app-clipboard-icon></app-clipboard-icon>
              </div>
              <input
                type="text"
                id="lastName"
                class="bg-gray-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                formControlName="lastName"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                [ngClass]="{ 'border-gray-900': isEditing }"
              />
            </div>
          </div>
        </div>
        <div
          class="flex justify-center items-center w-full"
          [@fade]
          *ngIf="isEditing"
        >
          <app-button
            buttonText="Save Changes"
            buttonType="submit"
            styles="px-5 py-2.5 rounded-lg w-full"
          ></app-button>
        </div>
      </form>
    </div>
  `,
  animations: [AnimationsModule.fade],
})
export class AccountComponent implements OnInit {
  public accountForm: FormGroup;
  public isEditing: boolean = false;
  public user$ = this.userService.user.pipe(
    tap((user) => {
      if (user) {
        this.accountForm.get('email')!.setValue(user?.email);
        // this.accountForm.get('firstName')!.setValue(user?.first_name);
        // this.accountForm.get('lastName')!.setValue(user?.last_name);
        // this.accountForm.get('phone')!.setValue(user?.phone);
      }
    })
  );

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.accountForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.accountForm.disable();
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.accountForm.disabled
      ? this.accountForm.enable()
      : this.accountForm.disable();
  }

  onSubmit() {
    const formValue = this.accountForm.value;
    console.log(formValue);
  }
}
