import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./startup/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-map',
    loadChildren: () => import('./tab-map/tab-map.module').then( m => m.TabMapPageModule)
  },
  {
    path: 'guide-post',
    loadChildren: () => import('./standalone-pages/guide-post/guide-post.module').then( m => m.GuidePostPageModule)
  },
  {
    path: 'login-details',
    loadChildren: () => import('./startup/login-details/login-details.module').then( m => m.LoginDetailsPageModule)
  },
  {
    path: 'register-details',
    loadChildren: () => import('./startup/register-details/register-details.module').then( m => m.RegisterDetailsPageModule)
  },
  { 
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'tab-create-details',
    loadChildren: () => import('./tab-create-details/tab-create-details.module').then( m => m.TabCreateDetailsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
