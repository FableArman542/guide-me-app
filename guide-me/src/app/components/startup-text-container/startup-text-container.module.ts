import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupTextContainerComponent } from './startup-text-container.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StartupTextContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [StartupTextContainerComponent]
})
export class StartupTextContainerModule { }
