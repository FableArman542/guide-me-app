import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Observable<firebase.User>;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private gPlus: GooglePlus,
    private platform: Platform) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<void> {

    try {
      const gplusUser = await this.gPlus.login({
        'webClientId': '1044818202476-5tnm7c9ke9eo1nrvmuidp1ugik571hd1.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      });

      
      return await this.afAuth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      ).then((credential) => {
        console.log('creds', credential.user);
        this.router.navigate(['/tabs/tab1']);
      });
    } catch(err) {
      console.log(err);
    }
    
  }

  // Move to login details page
  goToLogin() {
    console.log("Login button clicked");
    this.router.navigate(['login-details']);
  }

}
