import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppMoviesModule } from './app-movies.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppAuthenticationModule } from './app-authentication.module';
import { SearchComponent } from './components/shared/search/search.component';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { LoadingService } from '@services';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMoviesModule,
    FormsModule,
    AppAuthenticationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
   LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
