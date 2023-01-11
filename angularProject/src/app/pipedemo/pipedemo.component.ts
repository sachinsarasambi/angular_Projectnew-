import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  price :number =800000;
  obser;
  obj= {id:'101',name:'test1' }

  todaysdate =new Date();
  
  constructor(private _utilityService : UtilityService) {
    this.obser = this._utilityService.userName;
   }

  ngOnInit() {
  }

}
