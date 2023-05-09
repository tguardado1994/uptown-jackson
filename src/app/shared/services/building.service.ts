import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BaseResponse, Building } from '../interfaces/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  BASE_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getBuilding(id: number){
    return this.http.get<BaseResponse<Building>>(this.BASE_URL + '/buildings/show/' + id)
  }

  getBuildings(){
    return this.http.get<BaseResponse<Building[]>>(this.BASE_URL + '/buildings/index')
  }

 createBuilding(building: Building) {
  return this.http.post<BaseResponse<Building>>(this.BASE_URL + '/buildings', building);
 }

 editBulding(id: number){}

 deleteBuilding(id: number){}
}
