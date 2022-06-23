import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidePostPage } from './guide-post.page';

const routes: Routes = [
  {
    path: '',
    component: GuidePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidePostPageRoutingModule {}
