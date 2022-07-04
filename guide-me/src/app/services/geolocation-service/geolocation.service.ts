import { Injectable } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  public platform: any;
  public geocoder: any;

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
