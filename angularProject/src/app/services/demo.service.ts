import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

   apiurl='https://jsonplaceholder.typicode.com/';
   
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
    let users ='users'
     return this.http.get(this.apiurl + users);
  }

  getPostData()
  {
    let posts='posts'
   return  this.http.get(this.apiurl + posts)

  }
}
