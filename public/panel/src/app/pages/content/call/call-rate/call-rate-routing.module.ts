import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CallRateComponent} from './call-rate.component';

const routes: Routes = [
  {path: '', component: CallRateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallRateRoutingModule { }
