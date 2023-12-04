import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserHomeComponent } from './user-home/user-home.component';

import { SongsComponent } from '../media/songs/songs.component';
import { SeriesComponent } from '../media/series/series.component';
import { MoviesComponent } from '../media/movies/movies.component';
import { AdmindashboardComponent } from '../admin/admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'login',
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
  path:"userhome",
  component:UserHomeComponent
},
{
  path:"movies",
  component:MoviesComponent
},
{
  path:"songs",
  component:SongsComponent
},
{
  path:"series",
  component:SeriesComponent
},{
  path:"admindashboard",
  component:AdmindashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataRoutingModule { }
