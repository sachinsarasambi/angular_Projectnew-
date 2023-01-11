import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { from, interval, Observable } from 'rxjs';
import { FireBasePost } from '../models/firebasepost';
import { FirebasepostService } from '../services/firebasepost.service';
import { filter, map, take, takeLast, toArray } from 'rxjs/operators';




@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
  submitted :boolean=false; 

  notAllowedName=['codemind','Technology'];
  genders=[
    {
      id:'1',
      value:'male'
    },
    {
      id:'2',
      value:'Female'
    }
  ]
  myForm:FormGroup;
  firebasePost:FireBasePost;
  constructor(private _fb : FormBuilder , private _firebasepostService:FirebasepostService) {
    // this.myForm = new FormGroup({
    //   //To create neasted group group and control
    //   '':new FormGroup({
    //     'username':new FormControl('',[Validators.required , this.NaNames.bind(this)]),
    //     'email': new FormControl('',[Validators.required, Validators.email],this.NaEmails)

    //   }),
     
    //   'course':new FormControl(''), //default value gheu sakata 'angular' 
    //   'gender':new FormControl(''),
    //   'skills': new FormArray(userDetails[
    //     new FormControl(null,Validators.required)
    //   ])
  
    // });

    this.myForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['',Validators.required],
        email: ['',Validators.required]

      }),
      course:['Angular'],
      gender:['male'],
      skills:this._fb.array([])
    })
    
   }

  ngOnInit() {
//To use rxjs operator    

  //   const data = from(this._firebasepostService.users);
  //  // use RXJS oprator only get name from use rxjs operator
  //   data.pipe(
  //     map(x => x.name)
  //     ).subscribe(res =>{
  //       console.log('res',res ,' '+ 'data');
        
  //     })
  
    // data.subscribe(res =>{
    //   console.log('example of from operator',res);
      
    // })


    //filter operator

    // const data = from(this._firebasepostService.users);
    // data.pipe(
    //   filter(u => u.gender == 'Female'),
    //   toArray()
    // ).subscribe(res =>{
    //   console.log('filter operator',res);
      
    // }) 

    //Take operator
    // const sourse=interval(1000);
    // sourse.pipe(
    //   take(5)).subscribe(res =>{
    //   console.log('interval example',res);
      
    // })

    //take Last
    let randamsName=['sachin','sandio','vinod','ajij','sidhu','javascript','html'];

    const sourse =from (randamsName);
    sourse.pipe(
      takeLast(2)
    ).subscribe(res =>{
      console.log('Take last operation',res);
      
    })



//get post data from servor to dom firebse  and use  map rxjs operator.

    // this._firebasepostService.getPostDataFirebase().pipe(
    //   map(responseData =>{
    //     //empty Array
    //     const postArray=[];
    //     //forin loop
    //     for(const key in responseData){
    //       //check key
    //       if (responseData .hasOwnProperty(key)) {
    //         //push new value into array
    //         postArray.push({...responseData[key],id:key})
    //       }
    //     }
    //     return postArray;
    //   })
    // )

    // .subscribe(res =>{
    //   console.log('After maniolate data',res);
    //   })
    

  //  setTimeout(() =>{
  //   this.myForm.setValue({
  //     'userDetails' : {
  //       'username' : 'Codeminde1122',
  //       'email' : 'test@gmail.com'
  //     },
  //     'course':'HTML',
  //     'gender':'male'

  //   })
  
  //  },3500);


  //Patch value
  
  // setTimeout(() =>{
  //   this.myForm.patchValue({
  //     'userDetails' : {
  //       'username' : 'Codeminde1122',
  //       'email' : 'test@gmail.com'
  //     }
    

  //   })
  
  //  },3500);  

  }

  OnSubmit(){
    this.submitted=true;
    // console.log(this.myForm);

  this.firebasePost=new FireBasePost(); 
  this.firebasePost.username = this.myForm['controls'].userDetails['controls'].username.value;
  this.firebasePost.email = this.myForm['controls'].userDetails['controls'].email.value;
  this.firebasePost.course = this.myForm['controls'].course.value;
  this.firebasePost.gender = this.myForm['controls'].gender.value;
  this.firebasePost.skills = this.myForm['controls'].skills.value;
  // console.log('firebse post class',this.firebasePost);
  
 this._firebasepostService.createPostDataReactiveForm(this.firebasePost).subscribe(res =>{
  console.log('post from reactive form',res);
  
 })

}
onAddSkills(){
  
  (<FormArray>this.myForm.get('skills')).push(new FormControl(null,Validators.required));

}
removeskill(index:number){
    (<FormArray>this.myForm.get('skills')).removeAt(index);
}


  //THIS.NotAllowedNames
  NaNames(control:FormControl)
  {
      if(this.notAllowedName.indexOf(control.value) !== -1){
        return{'namesNotAllowed':true}
      }
      return null;

  }
  
  NaEmails(control:FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }


}


