import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRateRoutingModule } from './call-rate-routing.module';
import {CallRateComponent} from './call-rate.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [CallRateComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallRateRoutingModule
  ]
})
export class CallRateModule { }
