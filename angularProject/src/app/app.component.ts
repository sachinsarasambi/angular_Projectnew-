import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //inject the service
  constructor(private _postservice:PostService){

  }

  
  //get data from
  ngOnInit(): void {


  }
  title = 'angularProject';

  DeletePost(){
    this._postservice.deletePostById(1).subscribe( res =>{
      console.log(res);
      
    })
  }
}
