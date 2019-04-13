import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesContainerComponent } from './components/movies/movies-container/movies-container.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { MovieDetailsResolver } from './core/resolvers/movie-details.resolver';
import { UserGuardService } from './core/guards/user-guard.service';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesContainerComponent },
  { path: 'movies/search', component: MoviesContainerComponent },
  { path: 'movies/favorites', component: MoviesContainerComponent },
  { path: 'movies/movie/:id',
    component: MovieDetailsComponent,
    resolve: {movieDetails: MovieDetailsResolver},
    canActivate: [UserGuardService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
