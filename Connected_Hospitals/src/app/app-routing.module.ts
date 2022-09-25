import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { PatientComponent } from './patient/patient.component';
import { RegistrationComponent} from './login/registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'about-us', component:AboutUsComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'emergency', component:EmergencyComponent},
  {path:'patient/:user', component:PatientComponent}
  // user is variable , which help to receive the usernamevalue for path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
