import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRuleManagedNotificationComponent } from './create/create.component';
import { ListRuleManagedNotificationComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'list', component: ListRuleManagedNotificationComponent
  },
  {
    path: 'create/:param', component: CreateRuleManagedNotificationComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
