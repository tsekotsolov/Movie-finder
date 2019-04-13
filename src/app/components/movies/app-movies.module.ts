import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll/lib';

import { AppRoutingModule } from '../../app-routing.module';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MoviesService } from '../../core/services/movies/movies.service';
import { SearchService } from '../../core/services/search/search.service';
import { MovieDetailsResolver } from '../../core/resolvers/movie-details.resolver';
import { PercentageComponent } from '../ui/percentage/percentage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    MovieCategoryComponent,
    PercentageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    DragScrollModule,
    FormsModule
  ],
  providers: [
    MoviesService,
    SearchService,
    MovieDetailsResolver
  ]
})
export class AppMoviesModule { }