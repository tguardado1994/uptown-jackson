import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastService } from '../../shared/services/toast.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AnimationsModule } from 'src/app/shared/modules/animations.module';

@Component({
  selector: 'app-login',
  template: `
    <div class="container mx-auto p-4 rounded-xl shadow-xl max-w-md mt-8">
      <form
        [formGroup]="loginForm"
        (ngSubmit)="onSubmit()"
        #form="ngForm"
        class="flex flex-col gap-4"
      >
        <h3 class="text-xl font-bold dark:text-white text-center sm:text-2xl">
          Welcome Back! 👋
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
              (loginForm.get('email')?.invalid &&
                (loginForm.get('email')?.dirty ||
                  loginForm.get('email')?.touched)) ||
              (loginForm.get('email')?.invalid && form.submitted)
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
              (loginForm.get('password')?.invalid &&
                (loginForm.get('password')?.dirty ||
                  loginForm.get('password')?.touched)) ||
              (loginForm.get('password')?.invalid && form.submitted)
            "
            class="mt-2 text-sm text-red-600 dark:text-red-500"
          >
            Password is Required
          </p>
        </div>

        <app-button
          buttonText="Login"
          buttonType="submit"
          styles="px-5 py-2.5 rounded-lg w-full mt-4"
          [isLoading]="this.loading"
        ></app-button>
        <p
          class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center"
        >
          Don't Have An Account?<span
            routerLink="/signup"
            class="mx-4 my-2 font-semibold text-green-600 cursor-pointer"
            >Signup</span
          >
        </p>
      </form>
    </div>
  `,
  animations: [AnimationsModule.fadeInOut],
})
export class LoginComponent implements OnDestroy {
  public loginForm: FormGroup;
  public loading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.loading = true;
    const formValue = this.loginForm.value;
    const user = {
      email: formValue.email,
      password: formValue.password,
    };
    if (this.loginForm.valid) {
      this.subscription.add(
        this.userService.login(user.email, user.password).subscribe({
          next: (res) => {
            this.toastService.showToast({
              type: 'success',
              message: 'Welcome Back!',
            });
            this.userService.setUser(res);
            this.router.navigate(['/buildings']);
          },
          error: (err) => {
            this.loading = false;
            const errors = err.error.error_description;
            errors.forEach((message: string) => {
              this.toastService.showToast({
                type: 'error',
                message,
              });
            });
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
