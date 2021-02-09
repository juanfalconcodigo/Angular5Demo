import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagedNotificationRoutingModule } from './managed-notification-routing.module';
import { ManagedNotificationComponent } from './managed-notification.component';

@NgModule({
  imports: [
    CommonModule,
    ManagedNotificationRoutingModule
  ],
  declarations: [ManagedNotificationComponent]
})
export class ManagedNotificationModule { }
