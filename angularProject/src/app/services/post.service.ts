import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclient:HttpClient) { }

  getPosts():Observable<any>{

    return this.httpclient.get(`${devAPIurl}posts`);
  }

  getPostById(id):Observable<any>{
    return this.httpclient.get(`${devAPIurl}posts/` + id);
  }
deletePostById(id){
  return this.httpclient.delete(`${devAPIurl}posts/` + id)
}

}
