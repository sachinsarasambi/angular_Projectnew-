import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName;


  constructor(private _utilityservice:UtilityService) {
    this._utilityservice.userName.subscribe(res =>{
      this.userName = res;
      
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);
    this._utilityservice.userName.next(uname.value);

    

  }


}
