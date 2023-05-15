import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastService } from '../shared/services/toast.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center">Login</h3>
              <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    formControlName="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    formControlName="password"
                  />
                </div>
                <app-button
                  styles="w-100"
                  buttonText="Login"
                  [isLoading]="loading"
                  buttonType="submit"
                ></app-button>
                <div>
                  <p class="text-center mt-3">
                    Don't have an account?
                    <a routerLink="/signup">Create Account</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
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
            this.router.navigate(['/buildings'])
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
