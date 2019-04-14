import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsResolver, UserGuardService } from '@services';

const movieRoutes: Route[] = [
  { path: '', component: MoviesContainerComponent },
  { path: 'search', component: MoviesContainerComponent },
  { path: 'favorites', component: MoviesContainerComponent },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: { movieDetails: MovieDetailsResolver },
    canActivate: [UserGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(movieRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
