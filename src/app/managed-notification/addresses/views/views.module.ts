import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AddressesManagedNotificationViewsComponent } from './views.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  declarations: [AddressesManagedNotificationViewsComponent]
})
export class AddressesViewsModule { }
