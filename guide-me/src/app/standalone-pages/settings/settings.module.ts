import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { LogoToolbarBackModule } from 'src/app/components/toolbar-logos/logo-toolbar-back/logo-toolbar-back.module';
import { GenericStartupButtonModule } from 'src/app/components/generic-startup-button/generic-startup-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    LogoToolbarBackModule,
    GenericStartupButtonModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
