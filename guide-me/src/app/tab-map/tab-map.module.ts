import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMapPageRoutingModule } from './tab-map-routing.module';

import { TabMapPage } from './tab-map.page';
import { SharedModule } from '../modules/shared/shared.module';
// import { ChangeButtonComponent } from '../components/change-button/change-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMapPageRoutingModule,
    SharedModule
  ],
  declarations: [TabMapPage]
})
export class TabMapPageModule {}