import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedChengesGuard implements CanDeactivate <AddUserComponent> {
 canDeactivate(component:AddUserComponent){
    if(component.userName.dirty){
      return window.confirm('You have unsaved chenges .Are you sure want to navagate changes?')
    }else{
      return true;
    }

  }
  
}
