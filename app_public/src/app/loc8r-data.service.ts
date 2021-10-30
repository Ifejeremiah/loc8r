import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Location, Review } from './location';
import { User } from './user';
import { AuthResponse } from './authresponse';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error);
  }

  private apiBaseUrl: string = environment.apiBaseUrl;

  public getLocations(lat: number, lng: number): Promise<Location[]> {
    const maxDistance: number = 2000000;
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxdistance=${maxDistance}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location[])
      .catch(this.handleError);
  }

  public getLocationById(locationid: string): Promise<Location> {
    const url: string = `${this.apiBaseUrl}/locations/${locationid}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handleError);
  }

  public addReviewByLocationId(locationid: string, formData: Review): Promise<Review> {
    const url = `${this.apiBaseUrl}/locations/${locationid}/reviews`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('loc8r-token')}`
      })
    }

    return this.http
      .post(url, formData, httpOptions)
      .toPromise()
      .then(response => response as Review)
      .catch(this.handleError);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }

}