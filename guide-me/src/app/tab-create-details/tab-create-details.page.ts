import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ImagesService } from '../services/imagesservice/images.service';

@Component({
  selector: 'app-tab-create-details',
  templateUrl: './tab-create-details.page.html',
  styleUrls: ['./tab-create-details.page.scss'],
})
export class TabCreateDetailsPage implements OnInit {

  imagesource: string = '';

  constructor(private location: Location, private imagesService: ImagesService) { }

  ngOnInit() {

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
      }
    }
    );
  }

  backClicked() {
    console.log('backClicked');
    this.location.back();
  }

}
