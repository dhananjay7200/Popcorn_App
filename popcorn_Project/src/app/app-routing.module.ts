import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-data/login/login.component';
import { RegisterComponent } from './user-data/register/register.component';
import { ProfileComponent } from './user-data/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './client/movies/movies.component';
import { ClientdashboardComponent } from './client/clientdashboard/clientdashboard.component';
import { UserHomeComponent } from './user-data/user-home/user-home.component';
import { UsersComponent } from './admin/users/users.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { PendingclientsComponent } from './admin/pendingclients/pendingclients.component';
import { authenticationGuard } from './helper/authentication.guard';
import { RestrictionComponent } from './helper/restriction/restriction.component';
import { userauthGuard } from './helper/userauth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent ,

  },
  {
    path:'login',
   component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profile',
   component:ProfileComponent
  },{
    path:"clientdashboard",
    component:ClientdashboardComponent,
    canActivate:[authenticationGuard]
  },
  {
    path:"userhome",
    component:UserHomeComponent,
    canActivate:[userauthGuard]

  },
  {
    path:"restriction",
    component:RestrictionComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
