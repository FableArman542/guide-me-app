import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-button',
  templateUrl: './change-button.component.html',
  styleUrls: ['./change-button.component.scss'],
})
export class ChangeButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  clickMap() {
    this.router.navigateByUrl('tabs/tab-map');
  }

  clickGuide() {
    this.router.navigateByUrl('tabs/tab1');
  }

}
