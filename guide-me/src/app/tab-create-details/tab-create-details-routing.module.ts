import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCreateDetailsPage } from './tab-create-details.page';

const routes: Routes = [
  {
    path: '',
    component: TabCreateDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCreateDetailsPageRoutingModule {}
