import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {

  editFormGroup = new FormGroup({
    address: new FormControl(''),
    contact: new FormControl(''),
    image_path: new FormControl(''),
    email: new FormControl(''),
    square_footage: new FormControl('')
  })



  constructor() { }

  ngOnInit(): void {
  }

}
