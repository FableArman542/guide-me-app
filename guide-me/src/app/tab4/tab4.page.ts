import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PostserviceService } from '../services/postservice/postservice.service';
import { PostInfo } from '../models/post-info';
import { PlaceInfo } from '../models/place-info';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  posts: PostInfo[];

  constructor(private postService: PostserviceService,
    private af: AngularFireAuth) { }

  ngOnInit() {
    //firebase.auth().currentUser.uid
    this.postService.getPostsByUser("2KxmSgjyiZb4rr7EUEblXheGw1u2").subscribe(postsGotten => {
      // console.log(postsGotten);

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

}
