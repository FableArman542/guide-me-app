import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { PlaceInfo } from '../objects/place-info';
import { PostInfo } from '../objects/post-info';

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
        // this.postInfo.places.push(info);

        console.log(parseInt(info._day));
        console.log(this.daysImgs);

        if (info != null && parseInt(info._day) != null && info._imageUrl != null) {
          console.log("HEREEEEE");
          console.log(this.daysImgs)
          console.log(parseInt(info._day)+1);
          this.daysImgs[parseInt(info._day) + 1].push(info._imageUrl);
          
        }

        // console.log("info > " + info);
        // console.log("info > " + info._day+1);
        // console.log("info.day > " + typeof(info));
        // console.log(info.day);
        // console.log(info.imageUrl);
        // console.log(this.postInfo);
        // console.log(this.currentDay);
        
      }

    }
    );
  }

  addDay() {
    
    this.days.push(this.days.length + 1);
    this.daysImgs[this.days.length] = [];

    console.log(this.days.length);
    console.log(this.days);
    console.log(this.daysImgs);
  }

  goToTabDetails() {
    console.log('goToTabDetails');
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
    console.log("CLICKED DAY " + this.currentDay);
  }

}
