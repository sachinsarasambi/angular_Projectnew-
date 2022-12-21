import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-httpapiabservable',
  templateUrl: './httpapiabservable.component.html',
  styleUrls: ['./httpapiabservable.component.css']
})
export class HttpapiabservableComponent implements OnInit {
  emptyarray=[];

  constructor(private _demoservice:DemoService ) { 

  }

  ngOnInit() {
    this._demoservice.getUsersData().subscribe(data =>{
      console.log('getting data from api ',data);
      this.emptyarray.push(data);
      
    })

  }

}
