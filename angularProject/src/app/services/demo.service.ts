import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

   apiurl='https://jsonplaceholder.typicode.com/users';
  products=[
    {name:'laptop', id:'101'},
    {name:'mobile', id:'102'},
    {name:'TV', id:'103'}


  ]

  constructor(private http:HttpClient) { }

  display(){
    alert('subscribed successfully')
  }

  calculateAge(date){

  } 
  //this method is giving me the oservable
  getUsersData()
  {
    //fetch data
     return this.http.get(this.apiurl);
  }
}
