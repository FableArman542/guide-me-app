import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { DayInfo } from '../objects/days-info';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  currentDay: number = 0;

  days: number[] = [1];
  daysInfo: DayInfo[] = [
    new DayInfo('', [''], ''),
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  addDay() {
    this.days.push(this.days.length + 1);
    this.daysInfo.push(new DayInfo('', [''], ''));
  }

  goToTabDetails() {
    console.log('goToTabDetails');
    this.router.navigate(['/tabs/tab-create-details']);
  }

  onTitleChange(title: string) {
    this.daysInfo[this.currentDay].title = title;
    // console.log(this.daysInfo[this.currentDay]);
  }

  onTagsChange(unprocessed_tags: string) {
    let tags: string[] = unprocessed_tags.split(',');
    tags = tags.map(tag => tag.trim());
    this.daysInfo[this.currentDay].tags = tags;
  }

  onDescriptionChange(description: string) {
    this.daysInfo[this.currentDay].description = description;
  }

  @ViewChild('title', { read: ElementRef }) titleSelector: ElementRef;
  @ViewChild('tags', { read: ElementRef }) tagsSelector: ElementRef;
  @ViewChild('description', { read: ElementRef }) descriptionSelector: ElementRef;
  renderPage() {
    // Change the title of text input
    this.titleSelector.nativeElement.value = this.daysInfo[this.currentDay].title;
    this.tagsSelector.nativeElement.value = this.daysInfo[this.currentDay].tags.join(', ');
    this.descriptionSelector.nativeElement.value = this.daysInfo[this.currentDay].description;

    // Log the title inside the text input
    // console.log(this.titleSelector.nativeElement.value);
    
    // console.log('renderPage');
  }
  
  dayClicked(value: string) {
    // string to number
    this.currentDay = parseInt(value)-1;

    this.renderPage();
  }

}
