import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    public platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(
        (user) => {
          if (user) {
            this.router.navigate(['/tabs/tab1']);
          } else {
            this.router.navigate(['/']);
          }
        }
      );
    });
  }
}
