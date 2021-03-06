import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PostserviceService } from '../services/postservice/postservice.service';
import { PostInfo } from '../models/post-info';
import { PlaceInfo } from '../models/place-info';
import firebase from 'firebase/compat/app';
import { UsersService } from '../services/usersservice/users.service';
import { UserProfile } from '../models/user-profile';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  posts: PostInfo[];
  tabSelected: string = "guide";
  user: UserProfile;
  savedPosts: PostInfo[] = [];

  constructor(private postService: PostserviceService,
    private userService: UsersService,
    private af: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
    this.getPosts();
    this.getUser();
    this.getSavedPosts();
  }

  getSavedPosts() {
    console.log("getSavedPosts")
    this.postService.getSavedPostsByUser(firebase.auth().currentUser.uid).subscribe(savedPostsGotten => {

      let ps: PostInfo[] = [];
      savedPostsGotten.forEach(savedPost => {
        let postId: string = savedPost['post'];

        this.postService.getPostById(postId).pipe(
          debounceTime(500)
        ).subscribe(postGotten => {
          let places: PlaceInfo[] = [];

          postGotten['places'].map(place => {
            places.push(new PlaceInfo(parseInt(place['day']),
              place['location'],
              place['imageUrl'],
              place['description'],
              parseInt(place['budgetValue']),
              place['budgetCurrency'],
              place['length']));
          });

          let post = new PostInfo(
            postGotten['title'],
            postGotten['tags'],
            postGotten['description'],
            places);
          
          ps.push(post);

        });
        
      });
      this.savedPosts = ps;
    });

    // console.log(this.savedPosts);

  }

  getPosts() {
    this.postService.getPostsByUser(firebase.auth().currentUser.uid).subscribe(postsGotten => {
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

  getUser() {
    // "2KxmSgjyiZb4rr7EUEblXheGw1u2"
    this.userService.getUser(firebase.auth().currentUser.uid).subscribe(userGotten => {
      // console.log(userGotten);

      this.user = new UserProfile(
        userGotten['uid'],
        userGotten['email'],
        userGotten['displayName'],
        userGotten['photoURL'],
        userGotten['bio'],
        userGotten['ispublic']);



    });
  }

  onPostClicked(post: PostInfo) {
    this.router.navigate(['/guide-post'], { queryParams: { post: JSON.stringify(post) } });
  }

  goToSettingsPage() {
    this.router.navigate(['/settings']);
  }

}


