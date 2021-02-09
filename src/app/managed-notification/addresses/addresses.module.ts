import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesViewsModule } from './views/views.module';

@NgModule({
  imports: [
    CommonModule,
    AddressesViewsModule
  ]
})
export class AddressesManagedNotificationModule { }
