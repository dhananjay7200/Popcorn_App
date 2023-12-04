import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { SeriesComponent } from './series/series.component';
import { ClientmovieComponent } from './clientmovie/clientmovie.component';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { ClientsongsComponent } from './clientsongs/clientsongs.component';
import { ClientseriesComponent } from './clientseries/clientseries.component';
import { ProfileComponent } from '../user-data/profile/profile.component';

const routes: Routes = [{
  path:"addmovies",
  component:MoviesComponent
},
{
  path:"addsongs",
  component:SongsComponent
},
{
  path:"addseries",
  component:SeriesComponent
},{
  path:"clientmovies",
  component:ClientmovieComponent
},{
  path:"clientdashboard",
  component:ClientdashboardComponent
},
{
  path:"clientsongs",
  component:ClientsongsComponent
},{
  path:"clientseries",
  component:ClientseriesComponent
},{
  path:"clientdashboard/profile",
  component:ProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
