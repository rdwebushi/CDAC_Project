import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  signInForm: any;
  serverErrorMessages:string | undefined;
  Token:any;

  constructor(private userService: UserService, private router:Router) { }


  model={
    email: '',
    password:''
  }

  ngOnInit(): void {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/patient');
  }


  onSubmit(form: NgForm) {
    var take:any;
    this.userService.login(form.value).subscribe(
      res => {
        take=res;
       this.userService.setToken(take.token);
        this.router.navigateByUrl('/patient');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
    }


}
