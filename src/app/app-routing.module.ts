import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {SearchScreenComponent } from './search-screen/search-screen.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsResolver } from './services/resolvers/movie-details.resolver';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent, resolve: {movieDetails: MovieDetailsResolver}  },
  { path: 'search', component: SearchScreenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
