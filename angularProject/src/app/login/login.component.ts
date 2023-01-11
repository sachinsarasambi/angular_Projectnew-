import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router  ,  private _authservice:AuthService) { }

  ngOnInit() {
  }
  checkuser(uname,password){
    //Authgard -authguard to authservice to login.ts
    var output = this._authservice.checkuserNameandPassword(uname,password);

    if (output == true) {
      window.alert('login successfully');
      this._route.navigate(['product']);
    }else{
      window.alert('Invalid username and password');
    }

    // if(uname=='admin' && password=="admin")
    // {
    //    this._route.navigate(['product/laptop']);
    // }

  }

}
