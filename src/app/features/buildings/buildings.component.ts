import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { BuildingService } from 'src/app/shared/services/building.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-buildings',
  template: `
    <!-- <div class="container">
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
    </div> -->
    <h1>Uptown Jackson Rent or Buy</h1>

<div>
<button routerLink="/create-building" >Create Listing</button>
</div>

<hr>
 <div class="row" *ngFor="let building of buildings$ | async">
<img src={{building.image_url}} class="resize" alt="nice building">
<div class="col" >
  <p>Address:  {{ building.building_address }}</p>
  <p>Contact Name: {{building.building_contact_name}}</p>
  <p>Contact Email: {{building.building_contact_email}}</p>
  <p>Square Footage: {{building.square_footage}}</p>

  <a routerLink="/building-detail/:id">More Detail</a>
  <a routerLink="/edit-building" class="button edit">Edit</a>
  <a class="button delete">Delete</a>
</div>

  `,
})
export class BuildingsComponent {
  public buildings$ = this.buildingsService.getBuildings().pipe(
    tap((data) => console.log(data)),
    map((data: any) => data.data.buildings)
  );
  constructor(private buildingsService: BuildingService, public userService: UserService) {}

  deleteBuilding(id: number){
    this.buildingsService.deleteBuilding(id).subscribe(
      (response) => {
        console.log('Building deleted successfully!', response);

      },
      (error) => {
        console.error('Failed to delete building.', error);

      }
    );
  }
}
