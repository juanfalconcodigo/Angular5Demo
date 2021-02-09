import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppModuleRouting } from './app-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
