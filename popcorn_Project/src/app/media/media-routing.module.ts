import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SongsComponent } from './songs/songs.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
