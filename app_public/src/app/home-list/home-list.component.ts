import { Component, OnInit } from '@angular/core';

import { Loc8rDataService } from '../loc8r-data.service';
import { GeolocationService } from '../geolocation.service';
import { Location } from '../location';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(
    private loc8rDataService: Loc8rDataService,
    private geolocationService: GeolocationService
  ) { }

  public locations: Location[];

  public message: string;

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places...';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    this.loc8rDataService
      .getLocations(lat, lng)
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' : 'No places found nearby.';
        this.locations = foundLocations;
      });
  };

  private showError(error: any): void {
    if (error.code === 1) {
      this.message = 'Allow location access to work properly...';
    }
    else if (error.code === 2) {
      this.message = 'No internet. Connect to the internet...';
    } else {
      this.message = error.message;
    }
  }

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser.'
  }

  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geolocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }

  ngOnInit() {
    this.getPosition();
  }

}
