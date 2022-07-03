import { Component, Input, OnInit } from '@angular/core';
import { PlaceInfo } from 'src/app/models/place-info';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.scss'],
})
export class DayItemComponent implements OnInit {

  @Input() place;

  testImage : string = "https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg";

  constructor() { }

  ngOnInit() {
  }

}
