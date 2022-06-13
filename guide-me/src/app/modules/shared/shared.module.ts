import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeButtonComponent } from 'src/app/components/change-button/change-button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ChangeButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ChangeButtonComponent]
})
export class SharedModule { }
