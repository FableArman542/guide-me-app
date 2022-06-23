import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDetailsPageRoutingModule } from './login-details-routing.module';

import { LoginDetailsPage } from './login-details.page';
import { GenericStartupButtonModule } from 'src/app/components/generic-startup-button/generic-startup-button.module';
import { StartupTextContainerModule } from 'src/app/components/startup-text-container/startup-text-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginDetailsPageRoutingModule,
    GenericStartupButtonModule,
    StartupTextContainerModule
  ],
  declarations: [LoginDetailsPage]
})
export class LoginDetailsPageModule {}
