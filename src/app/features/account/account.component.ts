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
    <!-- <div *ngIf="user$ | async as user">
       -->
    <!-- <div class="text-center" style="margin-top: 20px;"> -->
    <!-- <h2>{{ user.name }}</h2> -->
    <!-- <h5>First Name: {{ user$.first_name }}</h5>
      <h5>Last Name: {{ user$.last_name }}</h5>
      <h5>Email: {{ user$.email }}</h5> -->
    <!-- Add more fields as needed -->

    <!-- <div
        class="container card mt-5 position-relative p-5"
        style="max-width: 20rem;"
      >
        <button
          class="btn  rounded-circle position-absolute  top-0 end-0 d-flex justify-content-center align-items-center"
          (click)="
            editFormGroup.disabled
              ? editFormGroup.enable()
              : editFormGroup.disable()
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            style="width: 1.5rem;height: 1.5rem"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>

        <form [formGroup]="editFormGroup" (ngSubmit)="onSubmit()">
          <p>
            First Name
            <input
              style="border-radius: 7px;"
              type="text"
              formControlName="first_name"
            />
          </p>

          <p>
            Last Name
            <input
              style="border-radius: 7px;"
              type="text"
              formControlName="last_name"
            />
          </p>

          <p>
            Email
            <input
              style="border-radius: 7px;"
              type="text"
              formControlName="email"
            />
          </p>

          <button
            style="margin-right: 45px; border-radius: 7px; width: 70px; height: 30px; "
            type="submit"
          >
            Save
          </button>
          <button
            style="border-radius: 7px; width: 70px; height: 30px;"
            type="button"
            (click)="cancelEdit()"
          >
            Cancel
          </button>
        </form>
      </div>
    </div> -->

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
