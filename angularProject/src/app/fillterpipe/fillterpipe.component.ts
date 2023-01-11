import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fillterpipe',
  templateUrl: './fillterpipe.component.html',
  styleUrls: ['./fillterpipe.component.css']
})
export class FillterpipeComponent implements OnInit {
  namesearch:string='';
  produtArray:any []= [
    {
      Srno:'101',
      name:'mobile',
      price:'7000rs',
      availability:'yes'
    }, {
      Srno:'102',
      name:'tv',
      price:'12000rs',
      availability:'yes'
    },
    {
      Srno:'103',
      name:'laptop',
      price:'54000rs',
      availability:'no'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
