import { Component, OnInit } from '@angular/core';
import { FirebasepostService } from '../services/firebasepost.service';

@Component({
  selector: 'app-firebasepost',
  templateUrl: './firebasepost.component.html',
  styleUrls: ['./firebasepost.component.css']
})
export class FirebasepostComponent implements OnInit {

  constructor(private _firebasepostService:FirebasepostService) { }

  ngOnInit() {
  }


  createPost(){
    this._firebasepostService.createpost().subscribe(res =>{ 
      console.log('firebase post',res);
      
    })
  }

}
