import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashigmachineComponent } from './washigmachine/washigmachine.component';
import {  RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UttilityModule } from '../models/uttility.module';
//import { UttilityModule } from '../models/uttility.module';

const prodRoutes:Routes =[
  {path:'',component:ProductComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tablet',component:TabletComponent},
    {path:'tv',component:TvComponent},
    {path:'washigmachine',component:WashigmachineComponent},
  ]},
]



@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashigmachineComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UttilityModule
  ],
  exports:[
    RouterModule
  ]
})
export class ProdutsModule {
  constructor(){
    console.log('product module called  ');
    
  }
 }
 