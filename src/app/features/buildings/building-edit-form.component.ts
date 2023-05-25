import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BuildingService } from 'src/app/shared/services/building.service';
import { Building } from 'src/app/shared/interfaces/building';

@Component({
  selector: 'app-building-edit-form',
  template: `
   <h1>Edit Building Listing</h1>

<form [formGroup]="editFormGroup" (submit)="onSubmit()">
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
  <button type="submit" >Edit</button>
</div>

</form>

  `,
  styles: [
  ]
})
export class BuildingEditFormComponent implements OnInit {

  @Input() building: Building | undefined;
  editFormGroup: FormGroup;

  constructor(private buildingService:BuildingService, private route: Router){this.editFormGroup = new FormGroup({
        address: new FormControl(),
        contact: new FormControl(),
        email: new FormControl(),
        square_footage: new FormControl(),
        image_path: new FormControl()
      });}

  ngOnInit(): void {
    if (this.building) {
      this.editFormGroup.patchValue({
        address: this.building.building_address,
        contact: this.building.building_contact_name,
        email: this.building.building_contact_email,
        square_footage: this.building.square_footage,
        image_path: this.building.image_url
      });
    }
  }

  onSubmit(){
    if (this.building) {
      const editedBuilding: Building = {
        id: this.building.id,
        building_address: this.editFormGroup.value.address,
        building_contact_name: this.editFormGroup.value.contact,
        building_contact_email: this.editFormGroup.value.email,
        square_footage: this.editFormGroup.value.square_footage,
        image_url: this.editFormGroup.value.image_path
      };

      this.buildingService.editBuilding(editedBuilding.id, editedBuilding).subscribe({
        next: (res: any) => {
          console.log('Building edited successfully:', res);
          this.route.navigate(['/buildings']);
        },
        error: (err: any) => {
          console.error('Error editing building:', err);
        }
      });
  }
  }

}
