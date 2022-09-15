import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { PatientComponent } from './patient/patient.component';
import { RegistrationComponent} from './registration/registration.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'/login',
    component: LoginComponent
  },
  {
    path:'/emergency',
    component: EmergencyComponent
  },
  {
    path:'/patient',
    component: PatientComponent
  },
  {
    path:'/registration',
    component: RegistrationComponent
  },
  {
    path:'/aboutus',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
