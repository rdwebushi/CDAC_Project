import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  userName: any;
  router: any;
    // This API is use to receive the value from path param
  constructor(public activatedRouter:ActivatedRoute,
     public rrouter:Router) { }
//lifecycle of angular we receive the vlaue from angular routing path
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data=>this.userName=data['user']);
  }
logout(){
  this.rrouter.navigate(['login'])
}
}
