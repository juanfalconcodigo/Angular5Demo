import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagedNotificationComponent } from './managed-notification.component';

const routes: Routes = [
  {
    path: '',
    component: ManagedNotificationComponent,
    children: [
      { path: 'rules', loadChildren: 'app/managed-notification/rules/rules.module#RulesManagedNotificationModule' },
      { path: 'addresses', loadChildren: 'app/managed-notification/addresses/addresses.module#AddressesManagedNotificationModule' },
      { path: '**', pathMatch: 'full', redirectTo: 'rules' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagedNotificationRoutingModule { }
