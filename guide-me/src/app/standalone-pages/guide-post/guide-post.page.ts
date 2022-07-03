import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceInfo } from 'src/app/models/place-info';
import { PostInfo } from 'src/app/models/post-info';

@Component({
  selector: 'app-guide-post',
  templateUrl: './guide-post.page.html',
  styleUrls: ['./guide-post.page.scss'],
})
export class GuidePostPage implements OnInit {

  post: PostInfo;
  currentDay: number = 0;
  dayInfo: PlaceInfo[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      let aux = JSON.parse(params['post']);
      this.post = this.assemblePostFromJSON(aux);
    });

    this.getCurrentDayInfo();

  }

  assemblePostFromJSON(json): PostInfo {
    let places: PlaceInfo[] = [];
    for (let i = 0; i < json._places.length; i++) {
      places.push(new PlaceInfo(parseInt(json._places[i]._day),
        json._places[i]._location,
        json._places[i]._imageUrl,
        json._places[i]._description,
        parseInt(json._places[i]._budgetValue),
        json._places[i]._budgetCurrency,
        json._places[i]._length));
    }

    return new PostInfo(json.title,
      json._tags,
      json._description,
      places);
  }

  getCurrentDayInfo(): PlaceInfo[] {
    this.dayInfo = [];
    this.post.places.forEach(place => {
      if (place.day == this.currentDay) this.dayInfo.push(place);
    });

    return this.dayInfo;
  }

  getNumberOfDays(): number[] {
    let days: number = 0;
    for (let i = 0; i < this.post.places.length; i++) {
      if (this.post.places[i].day > days) {
        days = this.post.places[i].day;
      }
    }

    return [...Array(days +1).keys()];
  }

  dayClicked(day: number): void {
    this.currentDay = day-1;
    this.getCurrentDayInfo();
  }

}
