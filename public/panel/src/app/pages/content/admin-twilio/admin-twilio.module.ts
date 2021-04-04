import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTwilioPageRoutingModule } from './admin-twilio-routing.module';

import { AdminTwilioPage } from './admin-twilio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTwilioPageRoutingModule
  ],
  declarations: [AdminTwilioPage]
})
export class AdminTwilioPageModule {}
