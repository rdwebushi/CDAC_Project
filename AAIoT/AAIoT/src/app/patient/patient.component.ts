import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
userDetails: any;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    var takeu:any;
    this.userService.getPatient().subscribe(
      res=>{
        takeu=res;
        this.userDetails=takeu.user;

      },
      err=>{}
    );
  }
    onLogout(){
      this.userService.deleteToken();
      this.router.navigate(['/signin']);
    }
}
