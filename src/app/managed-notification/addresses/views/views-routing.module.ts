import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressesManagedNotificationViewsComponent } from './views.component';

const routes: Routes = [
  {path:'',component:AddressesManagedNotificationViewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
