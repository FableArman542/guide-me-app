import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModallengthComponent } from './modallength.component';



@NgModule({
  declarations: [ModallengthComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ModallengthComponent]
})
export class ModallengthModule { }
