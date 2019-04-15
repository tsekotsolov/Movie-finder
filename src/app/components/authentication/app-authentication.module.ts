import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from 'app/components/authentication/register/register.component';
import { LoginComponent } from 'app/components/authentication/login/login.component';
import {
  AuthenticationService,
  UserService,
  UserGuardService,
  NotificationsService, 
  AdminGuardService} from '@services';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { SearchComponent } from '../shared/search/search.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    UserGuardService,
    AdminGuardService,
    NotificationsService
  ],
  exports: [
    NavigationComponent,
    SearchComponent,
  ]
})
export class AppAuthenticationModule { }
