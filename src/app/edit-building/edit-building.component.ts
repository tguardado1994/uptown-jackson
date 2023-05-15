import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BuildingService } from '../shared/services/building.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {

editFormGroup: any;

  constructor(private buildingService:BuildingService, private route: Router) { }

  ngOnInit(): void {
    this.editFormGroup = new FormGroup({
    address: new FormControl(''),
    contact: new FormControl(''),
    image_path: new FormControl(''),
    email: new FormControl(''),
    square_footage: new FormControl('')
  })

  }

  onSubmit(){
    const editBuilding = this.editFormGroup.value;

    this.buildingService.createBuilding(editBuilding).subscribe(
      (response) => {
        console.log('Building edit successfully!', response);
        this.route.navigate(['/building-listings'])
      },
      (error) => {
        console.error('Failed to edit building.', error);
      }
    );
  }

}
