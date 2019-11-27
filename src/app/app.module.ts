import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
