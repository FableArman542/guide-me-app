import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import * as L from 'leaflet';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { ToastController } from '@ionic/angular';
import { PostserviceService } from '../services/postservice/postservice.service';
import { PostInfo } from '../models/post-info';
import { PlaceInfo } from '../models/place-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-map',
  templateUrl: './tab-map.page.html',
  styleUrls: ['./tab-map.page.scss'],
})
export class TabMapPage implements OnInit {

  map: L.Map;
  posts: PostInfo[];

  constructor(private nativeGeocoder: NativeGeocoder,
    private toastController: ToastController,
    private postService: PostserviceService,
    private router: Router) { }

  ngOnInit() {
    this.getPosts();
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
    console.log("ionViewDidEnter");
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

  leafletMap() {

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    };

    for (let i = 0; i < this.posts.length; i++) {

      let location: string = this.posts[i].places[0].location;
      let image: string = this.posts[i].places[0].imageUrl;
      console.log("location: " + location);

      this.nativeGeocoder.forwardGeocode(location, options)
        .then((result: NativeGeocoderResult[]) => {
          console.log(result[0]);
          let latitude = result[0].latitude;
          let longitude = result[0].longitude;

          console.log("latitude: " + parseInt(latitude));
          console.log("longitude: " + longitude);

          let greenIcon = L.icon({
            iconUrl: image,
            iconSize: [150, 150],
            iconAnchor: [25, 50],
            popupAnchor: [0, -50]
          });

          L.marker(
            [parseInt(latitude), parseInt(longitude)],
            { icon: greenIcon }).addTo(this.map)
            .bindPopup(location)
            .on('click', () => {
              this.markerClickHandler(marker, this.posts[i]);
            });
        })
        .catch((error: any) => {
          console.log(error);
        });


    }
  }

  markerClickHandler(marker: any, post: PostInfo) {
    console.log("Marker Clicked>>> " + post)
    this.router.navigate(['/guide-post'], { queryParams: { post: JSON.stringify(post) } });
  }


}
