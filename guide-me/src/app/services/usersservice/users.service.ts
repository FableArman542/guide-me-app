import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/models/user-profile';
import firebase from 'firebase/compat/app';

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


}
