import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class FireserviceService {

  constructor(public af: AngularFirestore) {}

  unsubscribeOnLogOut() {
    // this.snapshotChangesSubscription.unsubscribe();
    const unsubscribe = firebase.auth().onAuthStateChanged(user => { unsubscribe(); });
  }
}
