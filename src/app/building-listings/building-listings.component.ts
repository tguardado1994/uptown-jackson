import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../shared/services/building.service';
import { map } from 'rxjs';




@Component({
  selector: 'app-building-listings',
  templateUrl: './building-listings.component.html',
  styleUrls: ['./building-listings.component.css']
})
export class BuildingListingsComponent implements OnInit {

    public buildings$ = this.buildingService.getBuildings().pipe(map((data) => data.data))
  constructor(private buildingService: BuildingService) { }

  ngOnInit(): void {
  }

}
