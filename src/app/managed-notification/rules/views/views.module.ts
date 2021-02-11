import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { ListRuleManagedNotificationComponent } from './list/list.component';
import { CreateRuleManagedNotificationComponent } from './create/create.component';
import { RulesManagedNotificationCoreModule } from '../core/core.module';
import { UpdateRuleManagedNotificationComponent } from './update/update.component';
import { ViewRuleManagedNotificationComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RulesManagedNotificationCoreModule
  ],
  declarations: [ViewsComponent, ListRuleManagedNotificationComponent, CreateRuleManagedNotificationComponent, UpdateRuleManagedNotificationComponent, ViewRuleManagedNotificationComponent]
})
export class RulesViewsModule { }
