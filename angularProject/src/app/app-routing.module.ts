import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UnSavedChengesGuard } from './un-saved-chenges.guard';


const routes: Routes = [
  //First step routing  configure the riute
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  //neasted routing 

  {path:'contactus',component:ContactusComponent},
  {path:'post',component:DemopostComponent},
  {path:'postdetails/:id',component:PostdetailsComponent},
  {path:'adduser',component:AddUserComponent,canDeactivate : [UnSavedChengesGuard]},
  {path:'product',canActivate :[AuthGuard], loadChildren:'./product/produts.module#ProdutsModule'},
  {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
  {path:'**',component:PagenotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('Routing module called');
    
  }

}
