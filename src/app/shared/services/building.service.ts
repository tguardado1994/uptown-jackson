import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  BASE_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  getBuilding(id: number){
    return this.http.get(this.BASE_URL + '/buildings/show/' + id)
  }
}
