import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { ProfileButtonsComponent } from '../components/profile-buttons/profile-buttons.component';
import { ProfileGuidePostComponent } from '../components/profile-guide-post/profile-guide-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, ProfileButtonsComponent, ProfileGuidePostComponent]
})
export class Tab4PageModule {}
