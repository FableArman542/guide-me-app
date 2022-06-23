import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {

  testImage: string = 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg';

  constructor(private router : Router) { }

  ngOnInit() {}

  openPost() {
    console.log('Open Post');
    // Navigate to the Post page
    this.router.navigate(['/guide-post']);
  }

}
