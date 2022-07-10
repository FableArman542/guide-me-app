import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PostInfo } from 'src/app/models/post-info';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';

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

  getPostsOld() {
    // Get all posts from /posts collection
    return this.af.collection('posts').valueChanges();
  }
  getPosts() {
    // Get all posts from /posts collection
    return this.af.collection<PostInfo>('posts').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PostInfo;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  getPostsByUser(userId: string) {
    // Get all posts from /posts collection
    return this.af.collection('posts', ref => ref.where('userId', '==', userId)).valueChanges();
    
  }

}
