import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./standalone-pages/startup/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'guide-post',
    loadChildren: () => import('./standalone-pages/guide-post/guide-post.module').then( m => m.GuidePostPageModule)
  },
  {
    path: 'login-details',
    loadChildren: () => import('./standalone-pages/startup/login-details/login-details.module').then( m => m.LoginDetailsPageModule)
  },
  {
    path: 'register-details',
    loadChildren: () => import('./standalone-pages/startup/register-details/register-details.module').then( m => m.RegisterDetailsPageModule)
  },
  { 
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-create-details',
    loadChildren: () => import('./tab-create-details/tab-create-details.module').then( m => m.TabCreateDetailsPageModule)
  },  {
    path: 'settings',
    loadChildren: () => import('./standalone-pages/settings/settings.module').then( m => m.SettingsPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
