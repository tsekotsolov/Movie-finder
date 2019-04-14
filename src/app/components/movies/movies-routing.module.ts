import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsResolver, UserGuardService } from '@services';

const routes: Routes = [
  {
    path: '',
    component: MoviesContainerComponent,
    children: [
      { path: 'search', component: MoviesContainerComponent },
      { path: 'favorites', component: MoviesContainerComponent },
      {
        path: 'movie/:id',
        component: MovieDetailsComponent,
        resolve: { movieDetails: MovieDetailsResolver },
        canActivate: [UserGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
