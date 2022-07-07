import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostInfo } from '../models/post-info';
import { PlaceInfo } from '../models/place-info';
import { PostserviceService } from '../services/postservice/postservice.service';

import * as L from 'leaflet';
import { Map, tileLayer, marker } from 'leaflet';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // Map
  map: L.Map;

  // Feed
  searchTerm: string;

  tabSelected: string = "guide";

  myLogo: string = 'assets/logo.svg';
  posts: PostInfo[];
  defaultUrl = 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
  newurl = 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  newnewurl = 'https://images.unsplash.com/photo-1656593257978-173199f84545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

  constructor(private router: Router,
    private postService: PostserviceService,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {

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

  setSearchTerm(value) {
    console.log(value)
    this.searchTerm = value;
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

  mapVisible: boolean = false;

  segmentChanged(ev: any) {


    if (ev.detail.value == 'map') {
      this.mapVisible = true;
      
      // Await for the map to load
      setTimeout(() => {
        this.runMap();
      }, 1000);
      
    } else {
      this.mapVisible = false;
    }
  }

  runMap() {
    this.map = new Map('mapId3').setView(
      [38.757026, -9.1185779],
      10
    );
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
    // tslint:disable-next-line:quotemark
    console.log("ionViewDidEnter" + this.map);
    console.log("POSTS"); console.log(this.posts);
    this.leafletMap();
  }
  


}