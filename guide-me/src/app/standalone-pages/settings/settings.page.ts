import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireauthserviceService } from 'src/app/services/fireauthservice/fireauthservice.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private authService: FireauthserviceService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logout');
    this.authService.doLogout().then(res => {
      this.router.navigate(['/login-details']);
    }, err => {
      console.log("Error Login " + err);
    });
  }

}
