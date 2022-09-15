import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginRef=new FormGroup({
      user:new FormControl(),
      pass:new FormControl()
    })
  constructor(public loginSer:LoginService,
    public router:Router) { } // DI for service class.

  ngOnInit(): void {
  }

  checkUser(){
    let login =this.loginRef.value;
    //for one user name password
    //console.log(login);
    // to add multiple user password use JSON file
    // create servise for login and create class for login portal

    this.loginSer.checkUser().subscribe(result=>{
      // result will ger array(multiple records)
      let message=result.find(l=>l.user==login.user && l.pass==login.pass);
      if(message==undefined){
          console.log("failuer")
      } else{
        console.log("Sucess")
        this.router.navigate(["patient"])
      }
    }, error=>console.log(error));
  }

}
