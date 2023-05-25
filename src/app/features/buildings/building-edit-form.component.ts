import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingService } from 'src/app/shared/services/building.service';
import { Building } from 'src/app/shared/interfaces/building';
import { Observable, Subscription, map, tap } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AnimationsModule } from 'src/app/shared/modules/animations.module';

@Component({
  selector: 'app-building-edit-form',
  template: `
    <div
      *ngIf="building$ | async as building"
      [@fade]
      class="container mx-auto shadow-lg p-4 max-w-2xl rounded-xl"
    >
      <h1 class="text-3xl font-bold mb-4">Edit Building</h1>

      <form [formGroup]="buildingEditForm" (submit)="onSubmit()">
        <label class="block mb-2">Building Address</label>
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
          formControlName="building_address"
        />

        <label class="block mb-2">Contact Name</label>
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
          formControlName="building_contact_name"
        />

        <label class="block mb-2">Contact Email</label>
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
          formControlName="building_contact_email"
        />

        <label class="block mb-2">Square Footage</label>
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
          formControlName="square_footage"
        />

        <label class="block mb-2">Building Image</label>
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
          formControlName="image_url"
        />

        <div class="grid grid-cols-1 md:gap-6 gap-2 md:grid-cols-2">
          <app-button
            buttonType="submit"
            [isLoading]="isLoading"
            buttonText="Save Changes"
            styles="px-5 py-2.5 rounded-lg w-full"
          ></app-button>
          <app-button
            buttonType="button"
            buttonText="Delete"
            styles="px-5 py-2.5 rounded-lg w-full bg-red-600 hover:bg-red-800 focus:ring-red-300"
            (onClick)="this.deleteBuilding(building.id)"
          ></app-button>
        </div>
      </form>
    </div>
  `,
  animations: [AnimationsModule.fade],
})
export class BuildingEditFormComponent implements OnInit, OnDestroy {
  public building$: Observable<Building> | undefined;
  public buildingEditForm: FormGroup;
  public isLoading: boolean = false;

  private routeSub: Subscription = new Subscription();

  constructor(
    private buildingService: BuildingService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.buildingEditForm = this.fb.group({
      id: [null],
      building_address: [null, [Validators.required]],
      building_contact_name: [null, [Validators.required, Validators.email]],
      building_contact_email: [null, [Validators.required, Validators.email]],
      square_footage: [null, [Validators.required]],
      image_url: [null],
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.building$ = this.buildingService.getBuilding(id).pipe(
        map((data) => data.data),
        tap((data) => {
          const formInstance = {
            id: data.id,
            building_address: data.building_address,
            building_contact_name: data.building_contact_name,
            building_contact_email: data.building_contact_email,
            square_footage: data.square_footage,
            image_url: data.image_url,
          };
          this.buildingEditForm.setValue(formInstance);
        })
      );
    });
  }

  onSubmit() {
    this.isLoading = true;
    const building = this.buildingEditForm.value;
    this.buildingService.updateBuilding(building).subscribe({
      next: (data) => {
        this.toastService.showToast({
          type: 'success',
          message: 'Building Updated!',
        });
        this.router.navigate(['/account']);
      },
      error: (data) => {
        this.toastService.showToast({
          type: 'error',
          message: 'Failed to update',
        });
      },
    });
  }

  deleteBuilding(id: number) {
    this.buildingService.deleteBuilding(id).subscribe({
      next: (data) => {
        this.toastService.showToast({
          type: 'success',
          message: 'Building Deleted!',
        });
        this.router.navigate(['/account']);
      },
      error: (data) => {
        this.toastService.showToast({
          type: 'error',
          message: 'Failed To Delete!',
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
