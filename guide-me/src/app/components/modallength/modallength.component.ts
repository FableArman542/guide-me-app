import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modallength',
  templateUrl: './modallength.component.html',
  styleUrls: ['./modallength.component.scss'],
})
export class ModallengthComponent implements OnInit {

  numberOfDays: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    console.log("CONFIRM: " + this.numberOfDays);
    return this.modalCtrl.dismiss(this.numberOfDays, 'confirm');
  }

}
