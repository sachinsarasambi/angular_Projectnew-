import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

   arrposts:post [] = [];
  constructor(private _postService:PostService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(res =>{
      // console.log('Jsonplaceholder',res);
      this.arrposts=res;
      
    })
  }

}
