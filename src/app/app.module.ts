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

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
