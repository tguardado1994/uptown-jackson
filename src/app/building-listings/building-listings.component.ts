import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../shared/services/building.service';



@Component({
  selector: 'app-building-listings',
  templateUrl: './building-listings.component.html',
  styleUrls: ['./building-listings.component.css']
})
export class BuildingListingsComponent implements OnInit {

  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
  }

}
