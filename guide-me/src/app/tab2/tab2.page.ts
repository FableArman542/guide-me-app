import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceInfo } from '../models/place-info';
import { PostInfo } from '../models/post-info';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  defaultLink: string = 'https://images.unsplash.com/photo-1656523916611-770eaee57842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

  currentDay: number = 0;

  days: number[] = [1];
  daysImgs = { 1: [] };

  postInfo: PostInfo = new PostInfo('', [], '', []);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['placeInfo'] != null) {
        let info = JSON.parse(params['placeInfo']);

        // console.log(parseInt(info._day));
        // console.log(this.daysImgs);

        if (info != null && parseInt(info._day) != null && info._imageUrl != null) {

          this.daysImgs[parseInt(info._day) + 1].push(info._imageUrl);
          this.postInfo.places.push(
            new PlaceInfo(parseInt(info._day),
              info._location,
              info._imageUrl,
              info._description,
              parseInt(info._budgetValue),
              info._budgetCurrency,
              info._length)
          );

          // console.log(this.postInfo);
        }

      }

    }
    );
  }

  postClicked() {
    
    let objectToSend = {
      title: this.postInfo.title,
      tags: this.postInfo.tags,
      description: this.postInfo.description,
      places: {

      }
    }

    // Add places to objectToSend
    for (let i = 0; i < this.postInfo.places.length; i++) {
      objectToSend.places[i] = {

        location: this.postInfo.places[i].location,
        imageUrl: this.postInfo.places[i].imageUrl,
        description: this.postInfo.places[i].description,
        budgetValue: this.postInfo.places[i].budgetValue,
        budgetCurrency: this.postInfo.places[i].budgetCurrency,
        length: this.postInfo.places[i].length

      }
    }

    console.log(objectToSend);

  }

  addDay() {

    this.days.push(this.days.length + 1);
    this.daysImgs[this.days.length] = [];

    // console.log(this.days.length);
    // console.log(this.days);
    // console.log(this.daysImgs);
  }

  goToTabDetails() {
    // console.log('goToTabDetails');
    this.router.navigate(['/tabs/tab-create-details'], { queryParams: { day: this.currentDay } });
  }

  onTitleChange(title: string) {
    this.postInfo.title = title;
  }

  onTagsChange(unprocessed_tags: string) {
    let tags: string[] = unprocessed_tags.split(',');
    tags = tags.map(tag => tag.trim());
    this.postInfo.tags = tags;
  }

  onDescriptionChange(description: string) {
    this.postInfo.description = description;
  }

  dayClicked(value: string) {

    this.currentDay = parseInt(value) - 1;
    // console.log("CLICKED DAY " + this.currentDay);
  }

  backClicked() {
    this.router.navigate(['/tabs/tab1']);
  }

}
