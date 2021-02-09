import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleComponent } from './pages/rule/rule.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

const routes: Routes = [
  { path: 'rule', component: RuleComponent },
  { path: 'documentation', component: DocumentationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
