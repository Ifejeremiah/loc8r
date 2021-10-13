import { Component, OnInit } from '@angular/core';

export class Location {
  _id = String;
  name = String;
  distance = Number;
  Address = String;
  rating = Number;
  facilities = [String];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }
  name:String = 'Costy';
  ngOnInit(): void {
  }

}
