import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecompo1',
  templateUrl: './servicecompo1.component.html',
  styleUrls: ['./servicecompo1.component.css']
})
export class Servicecompo1Component implements OnInit {
  productSs = {};

  constructor(private _demoservice: DemoService) { }

  ngOnInit() {
     this.productSs= this._demoservice.products;
  }
  onSubscibe()
  {
    this._demoservice.display();
  }

}
