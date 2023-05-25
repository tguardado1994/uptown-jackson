import { Component, Input, OnInit } from '@angular/core';
import { Building } from 'src/app/shared/interfaces/building';
import { AnimationsModule } from 'src/app/shared/modules/animations.module';

@Component({
  selector: 'app-building-card',
  template: `
    <div
      [@fade]
      *ngIf="building"
      class="shadow-lg cursor-pointer rounded-md overflow-hidden hover:shadow-xl transition-all ease-in-out duration-300 hover:scale-105"
      [routerLink]="[link ? link : 'detail/' + building.id]"
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
  `,
  animations: [AnimationsModule.fade],
})
export class BuildingCardComponent implements OnInit {
  @Input() building: Building | null = null;
  @Input() link: string = '';
  constructor() {}

  ngOnInit(): void {}
}
