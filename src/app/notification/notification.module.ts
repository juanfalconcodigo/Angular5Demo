import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { RuleComponent } from './pages/rule/rule.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CacheService } from '../services/cache.service';

@NgModule({
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [NotificationComponent, RuleComponent, DocumentationComponent],
  providers:[CacheService]
})
export class NotificationModule { }
