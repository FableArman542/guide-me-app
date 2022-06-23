import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LogoToolbarNoneComponent } from './logo-toolbar-none.component';


@NgModule({
  declarations: [LogoToolbarNoneComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LogoToolbarNoneComponent]
})
export class LogoToolbarNoneModule { }
