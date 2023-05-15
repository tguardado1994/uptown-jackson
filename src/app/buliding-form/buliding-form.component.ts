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



  constructor() { }

  ngOnInit(): void {
  }


  }






