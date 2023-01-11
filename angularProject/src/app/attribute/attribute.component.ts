import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
colorval='red';

people:any[]=[
  {
    'name':'jack',
    'country':'USA'
  }, {
    'name':'sachin',
    'country':'UK'
  },
   {
    'name':'Dhanaji',
    'country':'USA'
  }
  ,
  {
    'name':'kapil',
    'country':'India'
  },
  {
    'name':'sanju',
    'country':'India'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
