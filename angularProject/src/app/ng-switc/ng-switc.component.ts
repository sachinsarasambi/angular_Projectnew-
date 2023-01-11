import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switc',
  templateUrl: './ng-switc.component.html',
  styleUrls: ['./ng-switc.component.css']
})
export class NgSwitcComponent implements OnInit {
  selectproduct:string;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(value){
   console.log(value.target.value);
   this.selectproduct =value.target.value;
   
  }

}
