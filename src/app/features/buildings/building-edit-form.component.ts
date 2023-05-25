import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BuildingService } from 'src/app/shared/services/building.service';
import { Building } from 'src/app/shared/interfaces/building';

@Component({
  selector: 'app-building-edit-form',
  template: `
   <h1>Edit Building Listing</h1>

<form [formGroup]="editFormGroup" >
  <label>Building Address</label>
  <input type= "text" class="form-control" formControlName="address"><br><br>

  <label>Contact Name</label>
  <input type="text" class="form-control" formControlName="contact"><br><br>


  <label>Contact Email</label>
  <input type="text" class="form-control" formControlName="email"><br><br>


  <label>Square Footage</label>
  <input type="text" class="form-control" formControlName="square_footage"><br><br>

  <label>Building Image</label>
  <input type="text" class="form-control" formControlName="image_path">

  <div class="space">
  <input (click)="onSubmit()" type="submit" value="Edit">
</div>

</form>

  `,
  styles: [
  ]
})
export class BuildingEditFormComponent implements OnInit {

  @Input() building: Building | undefined;
  editFormGroup: any;

  constructor(private buildingService:BuildingService, private route: Router) { }

  ngOnInit(): void {
    this.editFormGroup = new FormGroup({
    address: new FormControl(this.building?.building_address),
    contact: new FormControl(this.building?.building_contact_name),
    image_path: new FormControl(this.building?.image_url),
    email: new FormControl(this.building?.building_contact_email),
    square_footage: new FormControl(this.building?.square_footage)
  })

  }

  onSubmit(){
    const editedBuilding = this.editFormGroup.value;
    this.buildingService.editBuilding(this.building?.id || 0, editedBuilding).subscribe({
      next: (res: any) => {

      },
    });
  }

}
