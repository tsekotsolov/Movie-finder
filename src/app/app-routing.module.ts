import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { MoviesContainerComponent } from './components/movies/movies-container/movies-container.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieDetailsResolver } from './core/resolvers/movie-details.resolver';
import { UserGuardService } from './core/guards/user-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'movies', loadChildren: './components/movies/app-movies.module#AppMoviesModule'}
  {
    path: 'movies',
    children: [
      { path: '', component: MoviesContainerComponent },
      { path: 'search', component: MoviesContainerComponent },
      { path: 'favorites', component: MoviesContainerComponent },
      {
        path: 'movie/:id',
        component: MovieDetailsComponent,
        resolve: { movieDetails: MovieDetailsResolver },
        canActivate: [UserGuardService]
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
