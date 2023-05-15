import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastService } from '../shared/services/toast.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center">Sign Up</h3>
              <form
                [formGroup]="signupForm"
                (ngSubmit)="onSubmit()"
                #form="ngForm"
              >
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    formControlName="email"
                  />
                  <div
                    *ngIf="
                      (signupForm.get('email')?.invalid &&
                        (signupForm.get('email')?.dirty ||
                          signupForm.get('email')?.touched)) ||
                      (signupForm.get('email')?.invalid && form.submitted)
                    "
                    class="text-danger"
                  >
                    Email is required
                  </div>
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
                  <div
                    *ngIf="
                      (signupForm.get('password')?.invalid &&
                        (signupForm.get('password')?.dirty ||
                          signupForm.get('password')?.touched)) ||
                      (signupForm.get('password')?.invalid && form.submitted)
                    "
                    class="text-danger"
                  >
                    Password is required
                  </div>
                </div>
                <div class="mb-3">
                  <label for="passwordConfirm" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="passwordConfirm"
                    placeholder="Confirm Password"
                    formControlName="passwordConfirmation"
                  />
                  <div
                    *ngIf="
                      (signupForm.get('passwordConfirmation')?.invalid &&
                        (signupForm.get('passwordConfirmation')?.dirty ||
                          signupForm.get('passwordConfirmation')?.touched)) ||
                      (signupForm.get('passwordConfirmation')?.invalid &&
                        form.submitted)
                    "
                    class="text-danger"
                  >
                    Password confirmation is required
                  </div>
                </div>
                <!-- <button type="submit" class="btn btn-primary w-100">
                  Sign Up
                </button> -->
                <app-button
                  styles="w-100"
                  buttonText="Sign Up"
                  [isLoading]="loading"
                  buttonType="submit"
                ></app-button>
              </form>
              <div>
                <p class="text-center mt-3">
                  Already Have An Account?
                  <a routerLink="/login">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
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
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      passwordConfirmation: [null, [Validators.required]],
    });
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
