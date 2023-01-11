import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strininter',
  templateUrl: './strininter.component.html',
  styleUrls: ['./strininter.component.css']
})
export class StrininterComponent implements OnInit {
  lang:string='Angular';
  name:string = 'sachin';
  village:string =' Arali';
  age:number=24;
  //Property Binding 

  allowServor=false;
  imgurl="https://images.ctfassets.net/s600jj41gsex/2hOk1dbmhjw61cQkp7BEVZ/f541411765cf36a954de2fcbb9be5303/Image_default_angular-form.png?w=896&h=736&q=50&fit=scale";
 
  //Event binding 
  servorcreationStutas: string ='servor not created';
  serverName:string='codemind.com';

  //call the method 

  getlangulge (){
    return this.lang
  }

  constructor() {
    setTimeout(() => {
      this.allowServor = true
    }, 5000);
   }
//event binding
   oncreteServor(){
    this.servorcreationStutas = 'servor created';
   }
   ngOnInit() {
  }

}
