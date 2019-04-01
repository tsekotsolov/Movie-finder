import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DragScrollModule } from 'ngx-drag-scroll/lib';

import { AppRoutingModule } from './app-routing.module';
import { MoviesContainerComponent } from './components/movies/movies-container/movies-container.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MovieCategoryComponent } from './components/movies/movie-category/movie-category.component';
import { MoviesService } from './services/movies.service';
import { SearchService } from './services/search.service';
import { MovieDetailsResolver } from './services/resolvers/movie-details.resolver';


@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    MovieCategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DragScrollModule
  ],
  providers: [
    MoviesService,
    SearchService,
    MovieDetailsResolver
  ]
})
export class AppMoviesModule { }