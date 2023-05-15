import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { BuildingService } from 'src/app/shared/services/building.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-buildings',
  template: `
    <div class="container">
      <div class="row" *ngIf="userService.user | async">
        <app-button routerLink="create" buttonText="Add Your Building" styles="my-3"></app-button>
      </div>
      <div class="row">
        <div class="col-md-4" *ngFor="let building of buildings$ | async">
          <div
            class="card mt-3"
            style="cursor: pointer;"
            [routerLink]="['detail/' + building.id]"
          >
            <img
              class="card-img-top"
              [src]="building.image_url"
              alt="Building image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ building.building_address }}</h5>
              <p class="card-text">
                Contact: {{ building.building_contact_name }}
              </p>
              <p class="card-text">
                Email: {{ building.building_contact_email }}
              </p>
              <p class="card-text">
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
  constructor(private buildingsService: BuildingService, public userService: UserService) {}
}
