import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { SureGuard } from './guards/sure.guard';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import {SingleproductpageComponent} from './pages/singleproductpage/singleproductpage.component'

const routes: Routes = [
  {path:"",component:HomepageComponent}, 
  {path:"register",component:RegisterComponent, canActivate:[IsLoggedGuard]},
  {path:"login",component:LoginComponent, canActivate:[IsLoggedGuard] },
  {path:"profile",component:ProfileComponent},
  {path:"products/:id",component:SingleproductpageComponent},  
  {path:"profile",component:ProfileComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
