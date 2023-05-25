import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Building } from 'src/app/shared/interfaces/building';
import { BuildingService } from 'src/app/shared/services/building.service';

@Component({
  selector: 'app-building-detail',
  template: `
    <div
      class="container mx-auto px-4 py-6 rounded-xl shadow-2xl max-w-xl mt-8 relative flex flex-col items-center"
      *ngIf="building$ | async as building"
    >
      <img [src]="building.image_url" class="w-64 h-64 object-cover" alt="" />
      <h2 class="text-2xl font-bold mt-4">
        {{ building.building_contact_name }}
      </h2>
      <!-- <p class="text-sm text-gray-600 mt-2">Owned by: {{ building.owner }}</p> -->
      <p class="text-sm text-gray-600 mt-2">
        Square footage: {{ building.square_footage }}
      </p>
      <p class="text-sm text-gray-600 mt-2">
        Address: {{ building.building_address }}
      </p>
      <a
        class="text-blue-500 underline mt-4"
        [href]="'mailto:' + building.building_contact_email"
      >
        Contact: {{ building.building_contact_email }}
      </a>
      <button class="btn btn-primary" (click)="editBuilding(building.id)">Edit</button>
    </div>
  `,
})
export class BuildingDetailComponent implements OnInit {
  public building$: Observable<Building> | null = null;

  constructor(
    private route: ActivatedRoute,
    public buildingService: BuildingService,
    private router: Router
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

  editBuilding(buildingId: number) {
    // Logic to navigate to the edit page for the building
    this.router.navigate(['/buildings/edit', buildingId]);
  }
}
