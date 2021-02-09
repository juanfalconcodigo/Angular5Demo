import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'notification',  loadChildren: 'app/notification/notification.module#NotificationModule' },
    { path:'managed-notification',loadChildren:'app/managed-notification/managed-notification.module#ManagedNotificationModule'}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
  })
  export class AppModuleRouting { }