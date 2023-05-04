import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buliding-form',
  templateUrl: './buliding-form.component.html',
  styleUrls: ['./buliding-form.component.css']
})
export class BulidingFormComponent implements OnInit {

  buildingFormGroup = new FormGroup({
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
