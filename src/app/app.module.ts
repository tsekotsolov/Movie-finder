import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppMoviesModule } from './components/movies/app-movies.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingService } from '@services';
import { LoaderComponent } from './components/ui/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMoviesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
   LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
