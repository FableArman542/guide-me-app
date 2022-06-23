import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { GenericStartupButtonModule } from 'src/app/components/generic-startup-button/generic-startup-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    GenericStartupButtonModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
