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
import { HttpapiabservableComponent } from './httpapiabservable/httpapiabservable.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { PipeComponent } from './pipe/pipe.component';
import { AboutComponent } from './about/about.component';
import { Emp1Component } from './emp1/emp1.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FillterpipeComponent } from './fillterpipe/fillterpipe.component';
import { FillterPipe } from './fillter.pipe';
import { PipefilterAsComponent } from './pipefilter-as/pipefilter-as.component';
import { FilterAsPipe } from './filter-as.pipe';
import { CountPipe } from './count.pipe';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
// import { ProdutsModule } from './product/produts.module';
import { CollegeModule } from './college/college.module';
import { AddUserComponent } from './add-user/add-user.component';
import { FirebasepostComponent } from './firebasepost/firebasepost.component';
import { StrininterComponent } from './strininter/strininter.component';
import { DemoderictivesComponent } from './demoderictives/demoderictives.component';
import { NgSwitcComponent } from './ng-switc/ng-switc.component';
import { AttributeComponent } from './attribute/attribute.component';
import { Coustdir2Directive } from './coustdir2.directive';
// import { RapidComponent } from './rapid/rapid.component';
// import { UttilityModule } from './models/uttility.module';
// import { CustdirDirective } from './custdir.directive';
// import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [
    AppComponent,
    FormreactiveComponent,
    FormAssignmentComponent,
    Servicecompo1Component,
    Servicecompo2Component,
    HttpapiabservableComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipeComponent,
    AboutComponent,
    Emp1Component,
    PipedemoComponent,
    FillterpipeComponent,
    FillterPipe,
    PipefilterAsComponent,
    FilterAsPipe,
    CountPipe,
    PropertyBindingComponent,
    AboutusComponent,
    ContactusComponent,
    // ProductComponent,
    HomeComponent,
    LoginComponent,
    PagenotFoundComponent,
    DemopostComponent,
    PostdetailsComponent,
    AddUserComponent,
    FirebasepostComponent,
    StrininterComponent,
    DemoderictivesComponent,
    NgSwitcComponent,
    AttributeComponent,
    Coustdir2Directive,
    // RapidComponent
   
  
  ],
  imports: [
    BrowserModule,
    // ProdutsModule,
    CollegeModule,
    // OrdersModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    console.log( 'App module loded');
    
  }
 }
