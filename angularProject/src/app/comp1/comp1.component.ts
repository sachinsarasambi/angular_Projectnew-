import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName;

  constructor(private _utilityservice : UtilityService) { 
    this._utilityservice.userName.subscribe(res =>{
      this.userName = res;
      console.log(res);
      
      
    })
  }

  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);

    let emp ={
      name :'sachin',
      id : '101'
    }
    //next method is used to send massage to observanle.i e username.
    // this._utilityservice.userName.next(uname.value);
    this._utilityservice.userName.next(JSON.stringify(emp));
    

  }

}
