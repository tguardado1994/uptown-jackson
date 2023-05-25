import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuildingService } from 'src/app/shared/services/building.service';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-building-create-form',
  template: `
    <div class="container flex flex-col justify-center pb-2 max-w-xl mx-auto">
      <h3 class="text-center font-bold text-2xl mb-6">Create Building</h3>
      <form [formGroup]="createForm" (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <label
            for="building_address"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Building Address</label
          >
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="building_address"
            placeholder="123 Main St"
            formControlName="building_address"
          />
        </div>
        <div class="mb-4">
          <label
            for="building_contact_name"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Contact Name</label
          >
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="building_contact_name"
            placeholder="John Doe"
            formControlName="building_contact_name"
          />
        </div>
        <div class="mb-4">
          <label
            for="building_contact_email"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Contact Email</label
          >
          <input
            type="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="building_contact_email"
            placeholder="name@example.com"
            formControlName="building_contact_email"
          />
        </div>
        <div class="mb-4">
          <label
            for="square_footage"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Square Footage</label
          >
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="square_footage"
            placeholder="1000"
            formControlName="square_footage"
          />
        </div>
        <div class="mb-4">
          <label
            for="image_url"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Image URL</label
          >
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image_url"
            placeholder="http://example.com/image.jpg"
            formControlName="image_url"
          />
        </div>
        <app-button
          styles="px-5 py-2.5 rounded-lg w-full"
          buttonText="Create"
          [isLoading]="loading"
          buttonType="submit"
        ></app-button>
      </form>
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
