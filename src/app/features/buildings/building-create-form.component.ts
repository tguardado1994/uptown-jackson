import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuildingService } from 'src/app/shared/services/building.service';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-building-create-form',
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center">Create Building</h3>
              <form [formGroup]="createForm" (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="building_address" class="form-label"
                    >Building Address</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="building_address"
                    placeholder="123 Main St"
                    formControlName="building_address"
                  />
                </div>
                <div class="mb-3">
                  <label for="building_contact_name" class="form-label"
                    >Contact Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="building_contact_name"
                    placeholder="John Doe"
                    formControlName="building_contact_name"
                  />
                </div>
                <div class="mb-3">
                  <label for="building_contact_email" class="form-label"
                    >Contact Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="building_contact_email"
                    placeholder="name@example.com"
                    formControlName="building_contact_email"
                  />
                </div>
                <div class="mb-3">
                  <label for="square_footage" class="form-label"
                    >Square Footage</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="square_footage"
                    placeholder="1000"
                    formControlName="square_footage"
                  />
                </div>
                <div class="mb-3">
                  <label for="image_url" class="form-label">Image URL</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image_url"
                    placeholder="http://example.com/image.jpg"
                    formControlName="image_url"
                  />
                </div>
                <app-button
                  styles="w-100"
                  buttonText="Create"
                  [isLoading]="loading"
                  buttonType="submit"
                ></app-button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BuildingCreateFormComponent implements OnDestroy {
  public createForm: FormGroup;
  public loading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private buildingService: BuildingService,
    private toastService: ToastService
  ) {
    this.createForm = this.fb.group({
      building_address: [null, [Validators.required]],
      building_contact_name: [null, [Validators.required]],
      building_contact_email: [null, [Validators.required, Validators.email]],
      square_footage: [null, [Validators.required]],
      image_url: [null],
    });
  }

  onSubmit() {
    this.loading = true;
    const formValue = this.createForm.value;
    if (this.createForm.valid) {
      this.subscription.add(
        this.buildingService.createBuilding(formValue).subscribe({
          next: (res) => {
            console.log(res);
            this.toastService.showToast({
              type: 'success',
              message: 'Building created successfully!',
            });
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
