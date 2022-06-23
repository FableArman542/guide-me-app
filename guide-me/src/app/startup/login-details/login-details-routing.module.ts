import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDetailsPage } from './login-details.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDetailsPageRoutingModule {}
