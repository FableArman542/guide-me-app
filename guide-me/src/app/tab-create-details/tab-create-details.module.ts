import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCreateDetailsPageRoutingModule } from './tab-create-details-routing.module';

import { TabCreateDetailsPage } from './tab-create-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCreateDetailsPageRoutingModule
  ],
  declarations: [TabCreateDetailsPage]
})
export class TabCreateDetailsPageModule {}
