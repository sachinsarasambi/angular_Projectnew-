import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //inject the service
  constructor(){

  }
  
  //get data from
  ngOnInit(): void {


  }
  title = 'angularProject';
}
