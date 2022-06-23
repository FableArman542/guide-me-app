import { Component, Input, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-startup-button',
  templateUrl: './generic-startup-button.component.html',
  styleUrls: ['./generic-startup-button.component.scss'],
})
export class GenericStartupButtonComponent implements OnInit {

  constructor() { }

  @Input() buttonText: string;
  @Input() height: string;
  @Output()
  submitEvent = new EventEmitter();

  ngOnInit() {}


  submit(): void {
    this.submitEvent.emit();
  }

}
