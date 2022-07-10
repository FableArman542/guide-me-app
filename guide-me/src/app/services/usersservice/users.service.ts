import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserProfile } from 'src/app/models/user-profile';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs/operators';
import { PostSaved } from 'src/app/models/post-saved';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public af: AngularFirestore) { }
  
  addUser(user: UserProfile) {
    let currentUser = firebase.auth().currentUser;

    return this.af
      .collection('users')
      .doc(currentUser.uid)
      .set(JSON.parse(JSON.stringify(user)));
  }

  getUser(userUuid: string) {
    return this.af.collection('users').doc(userUuid).valueChanges();
  }

  addToSavedPosts(postUuid: string) {
    let currentUser = firebase.auth().currentUser;

    return this.af
      .collection('savedPosts')
      .add({ 
        post: postUuid,
        userUuid: currentUser.uid
      });
  }

  deleteFromSavedPosts(savedPostId: string) {
    
    this.af
      .collection('savedPosts')
      .doc(savedPostId)
      .delete();

  }

  getSavedPosts() {
    let currentUser = firebase.auth().currentUser;

    // return this.af.collection('savedPosts', ref => ref.where('userUuid', '==', currentUser.uid)).valueChanges();
    return this.af.collection('savedPosts', ref => ref.where('userUuid', '==', currentUser.uid)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PostSaved;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }


}
