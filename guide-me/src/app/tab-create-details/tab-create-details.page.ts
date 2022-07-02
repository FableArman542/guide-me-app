import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ImagesService } from '../services/imagesservice/images.service';
import { PlaceInfo } from '../models/place-info';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab-create-details',
  templateUrl: './tab-create-details.page.html',
  styleUrls: ['./tab-create-details.page.scss'],
})
export class TabCreateDetailsPage implements OnInit {

  @ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;

  locations: string[] = ['Lisbon', 'Spain'];

  day: number;
  imagesource: string = '';
  locationValue: string;
  descriptionValue: string;
  budgetValue: number;
  budgetCurrency: string;
  length: string;

  // info: PlaceInfo = new PlaceInfo('', '', '', 0, 'EUR', '');

  constructor(private location: Location, 
    private imagesService: ImagesService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController) { }

  ngOnInit() { 
    
    this.clearPage();
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.day = params['day'];
    }
    );

  }

  ionViewWillEnter() {
    this.clearPage();
  }

  private clearPage() {
    this.locationValue = '';
    this.descriptionValue = '';
    this.budgetValue = 0;
    this.budgetCurrency = '';
    this.length = '';
    this.imagesource = '';
  }

  async saveClicked() {
    console.log('saveClicked');
    if (!this.isReadyToSave()) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please fill in all the fields',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    this.router.navigate(['/tabs/tab2'], { queryParams: { placeInfo: JSON.stringify(this.assemblePlaceInfo()) } });
  }

  private isReadyToSave(): boolean {
    if (this.locationValue === undefined || this.locationValue === '') return false;
    if (this.descriptionValue === undefined || this.descriptionValue === '') return false;
    if (this.budgetValue === undefined) return false;
    if (this.length === undefined || this.length === '') return false;
    if (this.imagesource === undefined || this.imagesource === '') return false;

    return true;
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
    // this.location.back();
    this.router.navigate(['/tabs/tab2']);
  }

}
