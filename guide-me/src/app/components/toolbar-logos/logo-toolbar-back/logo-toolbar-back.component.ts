import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logo-toolbar-back',
  templateUrl: './logo-toolbar-back.component.html',
  styleUrls: ['./logo-toolbar-back.component.scss'],
})
export class LogoToolbarBackComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {}

  backClicked() {
    console.log('backClicked');
    this._location.back();
  }

}
