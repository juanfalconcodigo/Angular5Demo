import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AddressesManagedNotificationViewsComponent } from './views.component';
import { AddressesManagedNotificationCoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    AddressesManagedNotificationCoreModule
  ],
  declarations: [AddressesManagedNotificationViewsComponent]
})
export class AddressesViewsModule { }
