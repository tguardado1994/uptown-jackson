import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Building } from 'src/app/shared/interfaces/building';
import { BuildingService } from 'src/app/shared/services/building.service';

@Component({
  selector: 'app-building-detail',
  template: `
   <div class="container mt-5" *ngIf="building$ | async as building">
  <div class="row">
    <div class="col-md-6">
      <img
        [src]="building.image_url"
        alt="Building image"
        class="img-fluid"
      />
    </div>
    <div class="col-md-6">
      <h2>{{ building.building_address }}</h2>
      <p>Contact: {{ building.building_contact_name }}</p>
      <p>Email: {{ building.building_contact_email }}</p>
      <p>Square Footage: {{ building.square_footage }}</p>

      <!-- Buttons -->
      <!-- <button class="btn btn-primary" (click)="editBuilding(building.id)">Edit</button> -->
      <button class="btn btn-danger" (click)="this.buildingService.deleteBuilding(building.id)">Delete</button>
    </div>
  </div>
</div>

  `,
})
export class BuildingDetailComponent implements OnInit {
  public building$: Observable<Building> | null = null;

  constructor(
    private route: ActivatedRoute,
    public buildingService: BuildingService
  ) {}

  ngOnInit(): void {
    this.building$ = this.route.params.pipe(
      switchMap((params) =>
        this.buildingService
          .getBuilding(params['id'])
          .pipe(map((res) => res.data))
      )
    );
  }
}
