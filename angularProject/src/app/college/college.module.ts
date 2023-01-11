import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollegeComponent } from './college.component';
import { MechDeptComponent } from './mech-dept/mech-dept.component';
import { CivilDeptComponent } from './civil-dept/civil-dept.component';
import { EleDeptComponent } from './ele-dept/ele-dept.component';
import { CompDeptComponent } from './comp-dept/comp-dept.component';
import { RouterModule, Routes } from '@angular/router';

  const  collegeRoute: Routes =[
    {path:'college',component:CollegeComponent,children:[
      {path:'mechDept',component:MechDeptComponent},
      {path:'civiDept',component:CivilDeptComponent},
      {path:'eleDept',component:EleDeptComponent},
      {path:'compDept',component:CompDeptComponent},

    ]}
  ]



@NgModule({
  declarations: [
    CollegeComponent,
    MechDeptComponent,
    CivilDeptComponent,
    EleDeptComponent,
    CompDeptComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(collegeRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class CollegeModule { }
