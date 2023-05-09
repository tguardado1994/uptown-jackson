import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BuildingService } from '../shared/services/building.service';
import { Building } from '../shared/interfaces/building';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buliding-form',
  templateUrl: './buliding-form.component.html',
  styleUrls: ['./buliding-form.component.css']
})
export class BulidingFormComponent implements OnInit {

  buildingFormGroup = new FormGroup({
    building_address: new FormControl(''),
    building_contact_name: new FormControl(''),
    image_url: new FormControl(''),
    building_contact_email: new FormControl(''),
    square_footage: new FormControl('')
  })



  constructor(private buildingService: BuildingService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newBuilding: Building = {
      building_address: this.buildingFormGroup.value.building_address!,
      building_contact_name: this.buildingFormGroup.value.building_contact_name!,
      image_url: this.buildingFormGroup.value.image_url!,
      building_contact_email: this.buildingFormGroup.value.building_contact_email!,
      square_footage: this.buildingFormGroup.value.square_footage!
    };

    this.buildingService.createBuilding(newBuilding).subscribe(
      (response) => {
        console.log('Building created successfully!', response);
        this.route.navigate(['/building-listings'])
      },
      (error) => {
        console.error('Failed to create building.', error);
      }
    );
  }
  }






