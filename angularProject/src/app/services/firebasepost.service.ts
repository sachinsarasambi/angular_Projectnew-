import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FireBasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebasepostService {
url='https://angular-crudoperation-default-rtdb.firebaseio.com/'
  constructor(private _httpClient:HttpClient) { }
  users:any[]=[
    {id:'101',name:'sachin',gender:'male'},
    {id:'102',name:'kumar',gender:'male'},
    {id:'103',name:'Ashu',gender:'Female'}
  ]

  createpost()
  {
      let postData={
        title:'This is angular crud',
        content:'This is firebase crud operation with the post'
      }
     return this._httpClient.post(this.url + 'posts.json',postData);
  }
  createPostDataReactiveForm(firebasepost:FireBasePost){
    return this._httpClient.post(this.url + 'posts.json',firebasepost);

  }
  getPostDataFirebase(){
    return this._httpClient.get(this.url+'posts.json');
  }
}
