import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesContainerComponent } from './components/movies/movies-container/movies-container.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import {MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { MovieDetailsResolver } from './services/resolvers/movie-details.resolver';

const routes: Routes = [
  { path: '', component: MoviesContainerComponent },
  { path: 'movie/:id', component: MovieDetailsComponent, resolve: {movieDetails: MovieDetailsResolver}  },
  { path: 'search', component: MovieSearchComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
