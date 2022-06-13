import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {

  testImage: string = 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg';

  constructor() { }

  ngOnInit() {}

}
