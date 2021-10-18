import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Location } from './home-list/home-list.component';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:8000/api';
  public getLocations(): Promise<Location[]> {
    const lng: number = -0.734342;
    const lat: number = 51.987326;
    const maxDistance: number = 2000000000;
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxdistance=${maxDistance}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}
