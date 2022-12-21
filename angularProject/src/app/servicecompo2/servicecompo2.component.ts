import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecompo2',
  templateUrl: './servicecompo2.component.html',
  styleUrls: ['./servicecompo2.component.css']
})
export class Servicecompo2Component implements OnInit {
  productSs={};

  constructor(private _demoservice:DemoService) { }

  ngOnInit() {
    this.productSs= this._demoservice.products;

  }
  onSubscibe()
  {
    this._demoservice.display(); 
  }

}
