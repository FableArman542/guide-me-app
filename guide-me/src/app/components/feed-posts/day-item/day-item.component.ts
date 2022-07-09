import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PlaceInfo } from 'src/app/models/place-info';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.scss'],
})
export class DayItemComponent implements OnInit {

  @Input() place;

  isShowing: boolean = true;

  @ViewChild('image', {read: ElementRef}) imageDiv : ElementRef;

  testImage: string = "https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg";

  constructor(private animationCtrl: AnimationController) {

  }

  ngOnInit() {
  }

  async changeState() {
    this.isShowing = !this.isShowing;
    
    const animationHideImage = this.animationCtrl.create()
      .addElement(this.imageDiv.nativeElement)
      .duration(600)
      .iterations(1)
      .fromTo('width', '55%', '0%');

    const animationShowImage = this.animationCtrl.create()
      .addElement(this.imageDiv.nativeElement)
      .duration(600)
      .iterations(1)
      .fromTo('width', '0%', '55%');
    
    if (this.isShowing) {
      await animationShowImage.play();
    } else {
      await animationHideImage.play();
    }
    
  }

}
