import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NotificationItemComponent } from '../components/notification-item/notification-item.component';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { LogoToolbarBackModule } from '../components/toolbar-logos/logo-toolbar-back/logo-toolbar-back.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    LogoToolbarBackModule
  ],
  declarations: [Tab3Page, NotificationItemComponent]
})
export class Tab3PageModule {}