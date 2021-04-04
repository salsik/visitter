import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/content/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rate',
    loadChildren: () => import('./pages/content/rate/rate.module').then(m => m.RatePageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/content/user-details/user-details.module').then(m => m.UserDetailsPageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('./pages/content/call/call.module').then(m => m.CallPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/content/admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'call/twilio',
    loadChildren: () => import('./pages/content/call/call-rate/call-rate.module').then(m => m.CallRateModule)
  },  {
    path: 'admin-twilio',
    loadChildren: () => import('./pages/content/admin-twilio/admin-twilio.module').then( m => m.AdminTwilioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
