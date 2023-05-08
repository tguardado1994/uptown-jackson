import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.paramMap.subscribe((params: ParamMap)=>{console.log(params.get('id'))}));
  }

}
