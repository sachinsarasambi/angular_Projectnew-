import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;


  constructor(private _utilityservice:UtilityService) { 
    this._utilityservice.userName.subscribe(res =>{
      this.userName = res;
      console.log(res);
      
      
    })
  }

  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);

    let emp={
      name : 'sandip',
      id : '102'
    }
    // this._utilityservice.userName.next(uname.value);
    this._utilityservice.userName.next(JSON.stringify(emp));


    

  }

}
