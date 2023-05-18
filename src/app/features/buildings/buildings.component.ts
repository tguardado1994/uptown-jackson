import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { BuildingService } from 'src/app/shared/services/building.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-buildings',
  template: `
    <div class="container mx-auto px-4 mt-8">
      <div
        class="md:flex md:justify-start my-3"
        *ngIf="userService.user | async"
      >
        <app-button
          routerLink="create"
          buttonText="Add Your Own Building"
          styles="px-5 py-2.5 rounded-lg w-full mt-4"
        ></app-button>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4"
          *ngFor="let building of buildings$ | async"
        >
          <div
            class="shadow-lg cursor-pointer rounded-md overflow-hidden hover:shadow-xl transition-all ease-in-out duration-300 hover:scale-105"
            [routerLink]="['detail/' + building.id]"
          >
            <img
              class="w-full h-64 object-cover"
              [src]="building.image_url"
              alt="Building image"
            />
            <div class="px-6 py-4">
              <h5 class="font-bold text-xl mb-2">
                {{ building.building_address }}
              </h5>
              <p class="text-gray-700 text-base">
                Contact: {{ building.building_contact_name }}
              </p>
              <p class="text-gray-700 text-base">
                Email: {{ building.building_contact_email }}
              </p>
              <p class="text-gray-700 text-base">
                Square Footage: {{ building.square_footage }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BuildingsComponent {
  public buildings$ = this.buildingsService.getBuildings().pipe(
    tap((data) => console.log(data)),
    map((data: any) => data.data.buildings)
  );
  constructor(
    private buildingsService: BuildingService,
    public userService: UserService
  ) {}
}
