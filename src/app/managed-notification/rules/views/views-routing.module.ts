import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRuleManagedNotificationComponent } from './create/create.component';
import { ListRuleManagedNotificationComponent } from './list/list.component';
import { UpdateRuleManagedNotificationComponent } from './update/update.component';
import { ViewRuleManagedNotificationComponent } from './view/view.component'
const routes: Routes = [
  {
    path: 'list', component: ListRuleManagedNotificationComponent
  },
  {
    path: 'create/:param', component: CreateRuleManagedNotificationComponent
  },
  {
    path: 'update/:param', component: UpdateRuleManagedNotificationComponent
  },
  {
    path: 'view/:param', component: ViewRuleManagedNotificationComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
