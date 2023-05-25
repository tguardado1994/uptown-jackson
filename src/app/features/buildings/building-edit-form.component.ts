import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BuildingService } from 'src/app/shared/services/building.service';
import { Building } from 'src/app/shared/interfaces/building';

@Component({
  selector: 'app-building-edit-form',
  template: `
   <h1>Edit Building Listing</h1>

<form [formGroup]="editFormGroup" (click)="onSubmit()">
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
  <button type="submit" (click)="onSubmit()">Edit</button>
</div>

</form>

  `,
  styles: [
  ]
})
export class BuildingEditFormComponent implements OnInit {


  editFormGroup: any;

  constructor(private buildingService:BuildingService, private route: Router){}

  ngOnInit(): void {
      this.editFormGroup = new FormGroup({
        address: new FormControl(),
        contact: new FormControl(),
        email: new FormControl(),
        square_footage: new FormControl(),
        image_path: new FormControl()
      });
  }

  onSubmit(){

  }

}
