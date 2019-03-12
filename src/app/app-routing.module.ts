import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {SearchScreenComponent } from './search-screen/search-screen.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'search', component: SearchScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
