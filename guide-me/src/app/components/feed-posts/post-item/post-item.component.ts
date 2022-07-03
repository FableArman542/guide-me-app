import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostInfo } from 'src/app/models/post-info';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {

  @Input() post: PostInfo;

  testImage: string = 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg';

  constructor(private router: Router) { }

  ngOnInit() { }

  openPost(): void {
    console.log('Open Post');
    console.log(this.post.places);
    this.router.navigate(['/guide-post'], { queryParams: { post: JSON.stringify(this.post) } });
  }

  getBudget(): string {
    let budget: number = 0;
    for (let i = 0; i < this.post.places.length; i++) {
      budget += this.post.places[i].budgetValue;
    }
    return budget + " " + this.post.places[0].budgetCurrency;
  }

  getTripLength(): string {
    let length: number = 1;
    for (let i = 0; i < this.post.places.length; i++) {
      if (this.post.places[i].day + 1 > length) {
        length = this.post.places[i].day + 1;
      }
    }
    if (length == 1) return length + " day";
    else return length + " days";
  }

}
