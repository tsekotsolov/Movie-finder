import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll/lib';
import { RouterModule } from '@angular/router';

import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MoviesService } from '../../core/services/movies/movies.service';
import { MovieDetailsResolver } from '../../core/resolvers/movie-details.resolver';
import { PercentageComponent } from '../ui/percentage/percentage.component';
import { AppSharedModule } from '../shared/app-shared.module';
import { SearchService, AuthenticationService } from '@services';
import { MoviesRoutingModule } from './movies-routing.module';
import { AppAuthenticationModule } from '../authentication/app-authentication.module';
import { UsersListComponent } from '../users-list/users-list.component';

@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    MovieCategoryComponent,
    PercentageComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DragScrollModule,
    AppSharedModule,
    RouterModule,
    MoviesRoutingModule,
    AppAuthenticationModule
  ],
  providers: [
    MoviesService,
    SearchService,
    MovieDetailsResolver,
  ],
})
export class AppMoviesModule { }
