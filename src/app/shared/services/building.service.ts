import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseResponse, Building, CreateBuilding } from '../interfaces/building';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  BASE_URL = environment.API_URL;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getBuilding(id: number) {
    return this.http.get<BaseResponse<Building>>(
      this.BASE_URL + '/buildings/' + id
    );
  }

  getBuildings(page: number) {
    return this.http.get<BaseResponse<Building[]>>(
      this.BASE_URL + `/buildings/index?page=${page}`
    );
  }

  createBuilding(building: CreateBuilding) {
    const token = this.cookieService.get('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      return this.http.post<BaseResponse<Building>>(
        this.BASE_URL + '/buildings/create',
        building,
        { headers: headers }
      );
    } else {
      return throwError(new Error('No token found'));
    }
  }

  updateBuilding(building: Building) {
    const token = this.cookieService.get('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      return this.http.patch<BaseResponse<Building>>(
        this.BASE_URL + '/buildings/update',
        building,
        { headers: headers }
      );
    } else {
      return throwError(new Error('No token found'));
    }
  }

  // editBuilding(id: number, building: Building) {
  //   const token = this.cookieService.get('token');
  //   if (token) {
  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     });

  //     return this.http
  //       .put<BaseResponse<Building>>(
  //         this.BASE_URL + `/buildings/${id}`,
  //         building,
  //         { headers: headers }
  //       )
  //       .pipe(
  //         catchError((error) => {
  //           console.error('Error editing building:', error);
  //           return throwError(error);
  //         })
  //       );
  //   } else {
  //     return throwError(new Error('Token not found'));
  //   }
  // }

  deleteBuilding(id: number) {
    const token = this.cookieService.get('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      return this.http.delete<BaseResponse<Building>>(
        this.BASE_URL + `/buildings/${id}`,
        { headers: headers }
      );
    } else {
      return throwError(new Error('Token not found'));
    }
  }

  fetchAllBuildingsFromUser() {
    const token = this.cookieService.get('token');
    if (token) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      });
      return this.http.get<BaseResponse<Building[]>>(
        this.BASE_URL + '/buildings/user',
        { headers: headers }
      );
    } else {
      return throwError(new Error('No token found'));
    }
  }
}
