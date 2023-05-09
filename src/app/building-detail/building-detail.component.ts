import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { BuildingService } from '../shared/services/building.service';
import { Building } from '../shared/interfaces/building';
import { Observable, Subscription, map } from 'rxjs';


@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit, OnDestroy {

public building$: Observable<Building> | undefined
public subsciption: Subscription | undefined
  constructor(private router: ActivatedRoute, private buildingService: BuildingService) { }

  ngOnInit(): void {
    this.subsciption = this.router.paramMap.subscribe((params: ParamMap)=>{
      const id = params.get('id')
      if (id) {
        this.building$ = this.buildingService.getBuilding(parseInt(id)).pipe(map((data) => data.data));
      }

    });

  }

  ngOnDestroy(): void {
      this.subsciption?.unsubscribe()
  }

}
