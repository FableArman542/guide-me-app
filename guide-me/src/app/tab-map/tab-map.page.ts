import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { ToastController } from '@ionic/angular';
import { PostserviceService } from '../services/postservice/postservice.service';
import { PostInfo } from '../models/post-info';
import { PlaceInfo } from '../models/place-info';

@Component({
  selector: 'app-tab-map',
  templateUrl: './tab-map.page.html',
  styleUrls: ['./tab-map.page.scss'],
})
export class TabMapPage implements OnInit {

  map: L.Map;
  posts: PostInfo[];

  constructor(private nativeGeocoder: NativeGeocoder, private toastController: ToastController, private postService: PostserviceService) { }

  ngOnInit() {
    
  }

  getPosts() {
    this.postService.getPosts().subscribe(postsGotten => {

      let ps: PostInfo[] = [];
      postsGotten.map(post => {
        let postToAdd: PostInfo = new PostInfo(post['title'], post['tags'], post['description'], []);
        post['places'].map(place => {
          postToAdd.places.push(
            new PlaceInfo(parseInt(place['day']), place['location'], place['imageUrl'], place['description'], parseInt(place['budgetValue']), place['budgetCurrency'], place['length'])
          );
        });

        ps.push(postToAdd);

      });
      this.posts = ps;

    });
  }

  ionViewDidEnter() {
    // In setView add latLng and zoom
    // tslint:disable-next-line:quotemark
    console.log("ionViewDidEnter" + this.map);
    this.map = new Map('mapId3').setView(
      [38.757026, -9.1185779],
      10
    );

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
    // tslint:disable-next-line:quotemark
    console.log("ionViewDidEnter" + this.map);

    this.getPosts();
    console.log("POSTS"); console.log(this.posts);
    this.leafletMap();
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  getLocation(location: string) {
    console.log("getLocation");
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(location, options)
      .then(async (result: NativeGeocoderResult[]) => {
        // console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
        const toast = await this.toastController.create({
          message: 'The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude,
          duration: 2000
        });
        toast.present();
      })
      .catch((error: any) => console.log(error));
  }

  leafletMap() {

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    for (let i = 0; i < this.posts.length; i++) {
      for (let j = 0; j < this.posts[i].places.length; j++) {
        let latitude = 0;
        let longitude = 0;
        let location = this.posts[i].places[j].location;
        console.log("location: " + location);
        this.nativeGeocoder.forwardGeocode("Berlin", options)
          .then(async (result: NativeGeocoderResult[]) => {

            latitude = parseInt(result[0].latitude);
            longitude = parseInt(result[0].longitude);
            console.log("SUCCESS");
            console.log("latitude: " + latitude + " longitude: " + longitude);
            marker([latitude, longitude]).addTo(this.map)
              .bindPopup(this.posts[i].title)
              .openPopup()
              ;
            // this.map.addLayer(marker([latitude, longitude]).bindPopup(location));

          })
          .catch((error: any) => console.log("ERROR " + error));

      }
    }

    marker([38.7570428, -9.1165408]).addTo(this.map)
      .bindPopup("ISEL" + " CENAS FIXES")
      .openPopup()
      ;

  }

}
