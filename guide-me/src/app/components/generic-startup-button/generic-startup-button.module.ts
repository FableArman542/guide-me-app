import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericStartupButtonComponent } from './generic-startup-button.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [GenericStartupButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GenericStartupButtonComponent]
})
export class GenericStartupButtonModule { }
