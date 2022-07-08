import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterDetailsPageRoutingModule } from './register-details-routing.module';

import { RegisterDetailsPage } from './register-details.page';

import { GenericStartupButtonModule } from 'src/app/components/generic-startup-button/generic-startup-button.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterDetailsPageRoutingModule,
    GenericStartupButtonModule
  ],
  declarations: [RegisterDetailsPage]
})
export class RegisterDetailsPageModule {}
