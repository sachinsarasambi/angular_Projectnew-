import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';




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

  constructor(private _fb : FormBuilder) {
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
    console.log(this.myForm);

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


