import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myLogo = 'assets/logo.svg';
  items: any[] = [
    1, 2, 3
  ];

  constructor(private router : Router) {}

  

}
