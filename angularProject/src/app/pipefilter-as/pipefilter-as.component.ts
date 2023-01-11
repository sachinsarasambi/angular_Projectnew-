import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipefilter-as',
  templateUrl: './pipefilter-as.component.html',
  styleUrls: ['./pipefilter-as.component.css']
})
export class PipefilterAsComponent implements OnInit {
  emparray:any[]=[
    {
      id:'101',
      name:'kapil',
      gender:'male',
      DOB:'1-1-1990'

    },
    {
      id:'101',
      name:'adhyksh',
      gender:'male',
      DOB:'1-1-1990'

    },
    {
      id:'102',
      name:'sachin',
      gender:'male',
      DOB:'1-1-1998'

    },
    {
      id:'103',
      name:'Satika',
      gender:'Female',
      DOB:'1-1-1999'

    },
    {
      id:'104',
      name:'sndya',
      gender:'Female',
      DOB:'1-1-1998'

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
