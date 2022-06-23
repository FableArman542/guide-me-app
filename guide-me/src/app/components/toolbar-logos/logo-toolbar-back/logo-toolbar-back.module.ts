import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoToolbarBackComponent } from './logo-toolbar-back.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LogoToolbarBackComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LogoToolbarBackComponent]
})
export class LogoToolbarBackModule { }
