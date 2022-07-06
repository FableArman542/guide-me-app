import { Injectable } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  key: string = '5c6933dcae65ddf7b8dc20de50c2ee24';
  url: string = 'http://api.positionstack.com/v1/';

  constructor() {
    // this.platform = new H.service.Platform({
    //   "app_id": "cQUhFgHIdwxGQMWpbQKW9g",
    //   "app_code": "Zjxa7OFxJNNPcgX7BVyGbUbZ1fFEEs6bs4l4Mko3hk5BvluV3AN3tlEINWM8NcYq9lKQ6nZ-FRz8x42Mj67CTg"
    //   //cQUhFgHIdwxGQMWpbQKW9g
    // });
  }

  getCoordinates(local: string) {

  }
}
