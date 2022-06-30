import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ImagesService } from '../services/imagesservice/images.service';
import { PlaceInfo } from '../objects/place-info';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-create-details',
  templateUrl: './tab-create-details.page.html',
  styleUrls: ['./tab-create-details.page.scss'],
})
export class TabCreateDetailsPage implements OnInit {

  locations: string[] = ['Lisbon', 'Spain'];

  day: number;
  imagesource: string = '';
  locationValue: string;
  descriptionValue: string;
  budgetValue: number;
  budgetCurrency: string;
  length: string;

  // info: PlaceInfo = new PlaceInfo('', '', '', 0, 'EUR', '');

  constructor(private location: Location, private imagesService: ImagesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.day = params['day'];
    }
    );

  }

  postClicked() {
    console.log('postClicked');
    this.router.navigate(['/tabs/tab2'], { queryParams: { placeInfo: JSON.stringify(this.assemblePlaceInfo()) } });
  }

  assemblePlaceInfo(): PlaceInfo {
    return new PlaceInfo(this.day,
      this.locationValue,
      this.imagesource,
      this.descriptionValue,
      this.budgetValue,
      this.budgetCurrency,
      this.length);
  }

  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
  // @ViewChild('imagetoshow', { read: ElementRef }) image: ElementRef;
  searchImage() {
    // if the string is empty, return
    if (this.searchbar.nativeElement.value === '') { return; }

    console.log(this.searchbar.nativeElement.value);

    this.imagesService.getImages(this.searchbar.nativeElement.value).subscribe(data => {

      if (data.photos.length > 0) {
        // console.log(data.photos[0].src.original);
        this.imagesource = data.photos[0].src.original;
        console.log
      }
    }
    );
  }

  backClicked() {
    this.location.back();
  }

}
