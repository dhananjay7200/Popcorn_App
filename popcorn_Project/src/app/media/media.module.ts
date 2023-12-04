import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { SongsComponent } from './songs/songs.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    SongsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MediaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MediaModule { }
