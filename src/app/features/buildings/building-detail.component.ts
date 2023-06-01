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
      class="container mx-auto px-6 py-8 bg-white rounded-xl shadow-md max-w-lg mt-10 flex flex-col items-center justify-center border border-gray-200"
      *ngIf="building$ | async as building"
    >
      <img
        [src]="building.image_url"
        class="w-72 h-72 object-cover rounded-full border border-gray-200"
        alt=""
      />

      <h2 class="text-3xl font-semibold mt-6 text-gray-800">
        {{ building.building_contact_name }}
      </h2>

      <!-- <p class="text-base text-gray-500 mt-2">Owned by: {{ building.owner }}</p> -->

      <p class="text-base text-gray-500 mt-2">
        Square footage: {{ building.square_footage }}
      </p>

      <p class="text-base text-gray-500 mt-2">
        Address: {{ building.building_address }}
      </p>

      <a
        class="text-indigo-600 hover:text-indigo-800 underline mt-4"
        [href]="'mailto:' + building.building_contact_email"
      >
        Contact: {{ building.building_contact_email }}
      </a>
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
