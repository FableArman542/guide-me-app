import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlaceInfo } from '../models/place-info';
import { PostInfo } from '../models/post-info';
import { PostserviceService } from '../services/postservice/postservice.service';

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

  title_: string;
  tags_: string;
  description_: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostserviceService,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['placeInfo'] != null) {
        let info = JSON.parse(params['placeInfo']);


        if (info != null && parseInt(info.day) != null && info.imageUrl != null) {

          this.daysImgs[parseInt(info.day) + 1].push(info.imageUrl);
          this.postInfo.places.push(
            new PlaceInfo(parseInt(info.day),
              info.location,
              info.imageUrl,
              info.description,
              parseInt(info.budgetValue),
              info.budgetCurrency,
              info.length)
          );
        }

      }

    }
    );
  }
  created: string = '';
  async postClicked() {
    console.log('postClicked');
    this.checkIfValid();

    this.postService.addPost(this.postInfo)
      .then(() => {
        this.created = '';
      })
      .catch(error => {
        this.created = 'error';
        console.log(error);
      }
      );

    if (this.created === '') {
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Post created successfully',
        buttons: ['OK']
      });
      this.clearPage();
      // this.router.navigate(['/tabs/tab1']);
      await alert.present();

    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Post wasn\'t created',
        buttons: ['OK']
      });
      await alert.present();
    }


  }

  async checkIfValid() {
    // Check if all fields are filled
    if (this.postInfo.title == null || this.postInfo.title == '') {
      await this.presentAlert('Please enter a title');
      return;
    }
    if (this.postInfo.tags == null || this.postInfo.tags.length == 0) {
      await this.presentAlert('Please enter at least one tag');
      return;
    }
    if (this.postInfo.description == null || this.postInfo.description == '') {
      await this.presentAlert('Please enter a description');
      return;
    }
    if (this.postInfo.places.length == 0) {
      await this.presentAlert('Please enter at least one place');
      return;
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  clearPage() {
    console.log('clearPage');
    this.title_ = '';
    this.tags_ = '';
    this.description_ = '';

    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: null });

    this.currentDay = 0;
    this.postInfo = new PostInfo('', [], '', []);
    this.days = [1];
    this.daysImgs = { 1: [] };


  }

  addDay() {
    this.days.push(this.days.length + 1);
    this.daysImgs[this.days.length] = [];
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

  deleteDay(day: number, index: number) {

    // Show are you sure alert
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Are you sure you want to delete this day?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Delete',
          handler: () => {

            let url: string = this.daysImgs[day + 1].splice(index, 1);
            // Delete from the postInfo the place with the same day and imageUrl
            this.postInfo.places = this.postInfo.places.filter(place => {
              return place.day != day || place.imageUrl != url;
            });

            console.log(this.postInfo.places);

          }
        }
      ]
    }).then(alert => alert.present());

  }

}
