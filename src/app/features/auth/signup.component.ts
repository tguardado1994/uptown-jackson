import { Component, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastService } from '../../shared/services/toast.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AnimationsModule } from '../../shared/modules/animations.module';

@Component({
  selector: 'app-signup',
  template: `
    <div class="container mx-auto p-4 rounded-xl shadow-xl max-w-md mt-8">
      <form
        [formGroup]="signupForm"
        (ngSubmit)="onSubmit()"
        #form="ngForm"
        class="flex flex-col gap-4"
      >
        <h3 class="text-xl font-bold dark:text-white text-center sm:text-2xl">
          Welcome To Uptown Jackson!
        </h3>

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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="johndoe@gmail.com"
              formControlName="email"
            />
          </div>
          <p
            [@fadeInOut]
            *ngIf="
              (signupForm.get('email')?.invalid &&
                (signupForm.get('email')?.dirty ||
                  signupForm.get('email')?.touched)) ||
              (signupForm.get('email')?.invalid && form.submitted)
            "
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            Email is Required
          </p>
        </div>

        <div>
          <label
            for="password"
            class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <app-lock-icon></app-lock-icon>
            </div>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="supersafepassword"
              formControlName="password"
            />
          </div>
          <p
            [@fadeInOut]
            *ngIf="
              (signupForm.get('password')?.invalid &&
                (signupForm.get('password')?.dirty ||
                  signupForm.get('password')?.touched)) ||
              (signupForm.get('password')?.invalid && form.submitted)
            "
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            Password is Required
          </p>
        </div>

        <div>
          <label
            for="passwordConfirmation"
            class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >Password Confirmation</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <app-check-shield-icon></app-check-shield-icon>
            </div>
            <input
              type="password"
              id="passwordConfirmation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder=""
              formControlName="passwordConfirmation"
            />
          </div>
          <p
            [@fadeInOut]
            *ngIf="
              (signupForm.get('passwordConfirmation')?.invalid &&
                (signupForm.get('passwordConfirmation')?.dirty ||
                  signupForm.get('passwordConfirmation')?.touched)) ||
              (signupForm.get('passwordConfirmation')?.invalid &&
                form.submitted)
            "
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            Password Confirmation is Required
          </p>
        </div>

        <div>
          <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Password requirements:
          </h2>
          <ul
            class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"
          >
            <li class="flex items-center">
              <app-check-icon
                *ngIf="isLengthValid(); else iconCross"
                [ngClass]="{
                  'text-green-500': isLengthValid(),
                  'text-gray-400': !isLengthValid()
                }"
              ></app-check-icon>
              <p class="ml-2">At least 7 characters</p>
            </li>
            <li class="flex items-center">
              <app-check-icon
                *ngIf="isLowercaseValid(); else iconCross"
                [ngClass]="{
                  'text-green-500': isLengthValid(),
                  'text-gray-400': !isLengthValid()
                }"
              ></app-check-icon>
              <p class="ml-2">At least one lowercase character</p>
            </li>
            <li class="flex items-center">
              <app-check-icon
                *ngIf="isSpecialCharValid(); else iconCross"
                [ngClass]="{
                  'text-green-500': isLengthValid(),
                  'text-gray-400': !isLengthValid()
                }"
              ></app-check-icon>
              <p class="ml-2">At least one special character, e.g., ! @ # ?</p>
            </li>
          </ul>
        </div>

        <ng-template #iconCross>
          <app-fail-check-icon></app-fail-check-icon>
        </ng-template>

        <app-button
          buttonText="Create Account"
          buttonType="submit"
          styles="px-5 py-2.5 rounded-lg w-full "
          [isLoading]="this.loading"
        ></app-button>
        <p
          class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center"
        >
          Have an account?<span
            routerLink="/login"
            class="mx-4 my-2 font-semibold text-green-600 cursor-pointer"
            >Login</span
          >
        </p>
      </form>
    </div>
  `,
  animations: [AnimationsModule.fadeInOut],
})
export class SignupComponent implements OnDestroy {
  public signupForm: FormGroup;
  public loading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(7),
          this.lowercaseValidator,
          this.specialCharacterValidator,
        ],
      ],
      passwordConfirmation: [null, [Validators.required]],
    });
  }

  isLengthValid() {
    const password = this.signupForm.get('password')?.value || '';
    return password.length >= 7;
  }

  isLowercaseValid() {
    const password = this.signupForm.get('password')?.value || '';
    return /[a-z]/.test(password);
  }

  isSpecialCharValid() {
    const password = this.signupForm.get('password')?.value || '';
    return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  }

  lowercaseValidator(control: FormControl) {
    const regex = /[a-z]/g;
    if (!regex.test(control.value)) {
      return { lowercaseRequired: true };
    }
    return null;
  }

  specialCharacterValidator(control: FormControl) {
    const regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if (!regex.test(control.value)) {
      return { specialCharacterRequired: true };
    }
    return null;
  }

  onSubmit() {
    this.loading = true;
    const formValue = this.signupForm.value;
    if (formValue.passwordConfirmation !== formValue.password) {
      this.toastService.showToast({
        type: 'error',
        message: 'Passwords do not match!',
      });
      this.loading = false;
      return;
    }
    const user = {
      email: formValue.email,
      password: formValue.password,
    };
    if (this.signupForm.valid) {
      this.subscription.add(
        this.userService.createUser(user).subscribe({
          next: (res) => {
            this.toastService.showToast({
              type: 'success',
              message: 'Account Created!',
            });
            this.userService.setUser(res);
            this.router.navigate(['/buildings']);
          },
          error: (err) => {
            const errors = err.error.error_description;
            errors.forEach((message: string) => {
              this.toastService.showToast({
                type: 'error',
                message,
              });
            });
            this.loading = false;
          },
          complete: () => (this.loading = false),
        })
      );
    } else {
      this.loading = false;
      return;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
