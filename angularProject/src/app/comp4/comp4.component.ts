import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
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
