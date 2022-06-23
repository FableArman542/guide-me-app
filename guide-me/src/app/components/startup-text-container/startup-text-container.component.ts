import { Component, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-startup-text-container',
  templateUrl: './startup-text-container.component.html',
  styleUrls: ['./startup-text-container.component.scss'],
})
export class StartupTextContainerComponent implements OnInit {

  @Input() text: string;
  @Input() placeholder: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {}

}
