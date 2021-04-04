import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTwilioPage } from './admin-twilio.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTwilioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTwilioPageRoutingModule {}
