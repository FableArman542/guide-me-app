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
    

    let len: number = 1;
    for (let i = 0; i < post.places.length; i++) {
      if (post.places[i].day + 1 > len) {
        len = post.places[i].day + 1;
      }
    }
    
    if (len == 1) post.triplength =  length + " day";
    else post.triplength = length + " days";

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

  getSavedPostsByUser(userId: string) {
    // Get all saved posts from /savedPosts collection and return them as an array of PostInfo objects
    return this.af.collection('savedPosts', ref => ref.where('userUuid', '==', userId)).valueChanges();
  }

  getPostById(postId: string) {
    // Get post by id from /posts collection
    return this.af.collection('posts').doc(postId).valueChanges();
  }

}
