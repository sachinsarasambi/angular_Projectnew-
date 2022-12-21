import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormreactiveComponent } from './formreactive/formreactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { Servicecompo1Component } from './servicecompo1/servicecompo1.component';
import { Servicecompo2Component } from './servicecompo2/servicecompo2.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpapiabservableComponent } from './httpapiabservable/httpapiabservable.component'


@NgModule({
  declarations: [
    AppComponent,
    FormreactiveComponent,
    FormAssignmentComponent,
    Servicecompo1Component,
    Servicecompo2Component,
    HttpapiabservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
