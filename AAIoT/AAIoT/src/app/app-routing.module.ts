import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { PatientComponent } from './patient/patient.component';

import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'team', component:TeamComponent},
  {
    path:'registration', component:LoginComponent,
    children:[{path:'', component:RegistrationComponent}]
  },
  {
    path:'signin', component:LoginComponent,
    children:[{path:'', component:SignInComponent}]
  },
  {
    path:'patient', component:PatientComponent
  },
  {
    path:'', redirectTo:'/signin',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
