import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-demoderictives',
  templateUrl: './demoderictives.component.html',
  styleUrls: ['./demoderictives.component.css']
})
export class DemoderictivesComponent implements OnInit {
  isShow:boolean=true;
  title :string="Top 3 movies";
  movies:Movies[]=[
    {title:'3 diets',deractor:'sachin',cast:'amerikhan',releseDate:'2008'},
    {title:'kantara',deractor:'rishabh',cast:'rishabh',releseDate:'2022'},
    {title:'kgf',deractor:'ysh',cast:'yshbhai',releseDate:'2019'},
    {title:'paa',deractor:'Bachan',cast:'modi',releseDate:'2015'}

  ]

  constructor() { }

  ngOnInit() {
  }

}
