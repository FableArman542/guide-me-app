import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidePostPageRoutingModule } from './guide-post-routing.module';

import { GuidePostPage } from './guide-post.page';
import { LogoToolbarBackModule } from 'src/app/components/toolbar-logos/logo-toolbar-back/logo-toolbar-back.module';
import { DayItemComponent } from 'src/app/components/feed-posts/day-item/day-item.component';
import { ProfileModule } from 'src/app/components/profile/profile-guide-post/profile.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidePostPageRoutingModule,
    LogoToolbarBackModule,
    ProfileModule
  ],
  declarations: [GuidePostPage, DayItemComponent]
})
export class GuidePostPageModule {}
