import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingService } from '@services';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { AppSharedModule } from './components/shared/app-shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppSharedModule,
    ToastrModule.forRoot()
  ],
  providers: [
   LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
