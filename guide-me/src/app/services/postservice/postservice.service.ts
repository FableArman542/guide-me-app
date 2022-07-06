import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PostInfo } from 'src/app/models/post-info';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(public af: AngularFirestore) { }

  addPost(post: PostInfo) {
    // console.log("ADD POST");
    // console.log(post);
    if (post.places.length == 0) return;
    if (post.places[0].imageUrl == null || post.places[0].imageUrl=='') return;

    let currentUser = firebase.auth().currentUser;
    let objectToSend = JSON.parse(JSON.stringify(post))
    objectToSend['userId'] = currentUser.uid;

    return this.af
      .collection('posts')
      .add(objectToSend);
  }

  getPosts() {
    // Get all posts from /posts collection
    return this.af.collection('posts').valueChanges();
  }

  getPostsByUser(userId: string) {
    // Get all posts from /posts collection
    return this.af.collection('posts', ref => ref.where('userId', '==', userId)).valueChanges();
    
  }

}
