import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../app/services/search.service';
import { SearchScreenComponent } from './search-screen/search-screen.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { MovieCategoryComponent } from './movie-category/movie-category.component';
import { MovieDetailsResolver } from './services/resolvers/movie-details.resolver';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    MovieDetailsComponent,
    SearchScreenComponent,
    RegisterComponent,
    LoginComponent,
    MovieCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragScrollModule
  ],
  providers: [
    MoviesService,
    SearchService,
    MovieDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
