import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { FireauthserviceService } from 'src/app/services/fireauthservice/fireauthservice.service';
import { UsersService } from 'src/app/services/usersservice/users.service';
import { UserProfile } from 'src/app/models/user-profile';


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
    private platform: Platform,
    private authService: FireauthserviceService,
    private usersService: UsersService) {
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

        if (credential.additionalUserInfo.isNewUser) {
          console.log("New User")

          let email: string = credential.user.email;
          let username: string = email.split("@")[0];
          let uid: string = credential.user.uid;

          console.log(email);
          console.log(username);
          console.log(uid);

          this.registerInDatabase(email, username, uid);
          
        }
        
        console.log('creds', credential.user);
        console.log(credential);
        this.router.navigate(['/tabs/tab1']);
      });
    } catch(err) {
      console.log(err);
    }
    
  }

  registerInDatabase(email: string, username: string, id: string) {
    this.usersService.addUser(new UserProfile(
      id,
      email,
      username,
      '',
      '',
      true));
  }

  // Move to login details page
  goToLogin() {
    console.log("Login button clicked");
    this.router.navigate(['login-details']);
  }

}
