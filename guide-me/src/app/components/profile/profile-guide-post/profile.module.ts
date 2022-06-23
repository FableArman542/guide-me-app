import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileGuidePostComponent } from './profile-guide-post.component';


@NgModule({
  declarations: [ProfileGuidePostComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ProfileGuidePostComponent]
})
export class ProfileModule { }
