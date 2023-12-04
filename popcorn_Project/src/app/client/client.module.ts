import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { SeriesComponent } from './series/series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { ClientmovieComponent } from './clientmovie/clientmovie.component';
import { ClientsongsComponent } from './clientsongs/clientsongs.component';
import { ClientseriesComponent } from './clientseries/clientseries.component';

@NgModule({
  declarations: [
    MoviesComponent,
    SongsComponent,
    SeriesComponent,
    ClientdashboardComponent,
    ClientmovieComponent,
    ClientsongsComponent,
    ClientseriesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
