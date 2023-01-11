import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  
  array:any []=[];
  constructor(private _postservice:PostService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this._postservice.getPostById(id).subscribe(res =>{
    console.log(res);
    this.array=res;
        })
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


}
