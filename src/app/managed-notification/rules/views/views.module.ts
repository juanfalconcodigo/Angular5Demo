import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { ListRuleManagedNotificationComponent } from './list/list.component';
import { CreateRuleManagedNotificationComponent } from './create/create.component';
import { RulesManagedNotificationCoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RulesManagedNotificationCoreModule
  ],
  declarations: [ViewsComponent, ListRuleManagedNotificationComponent, CreateRuleManagedNotificationComponent]
})
export class RulesViewsModule { }
