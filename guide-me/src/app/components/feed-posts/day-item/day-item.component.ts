import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.scss'],
})
export class DayItemComponent implements OnInit {

  testImage : string = "https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg";

  constructor() { }

  ngOnInit() {}

}
