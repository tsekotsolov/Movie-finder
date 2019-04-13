import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from 'app/components/authentication/register/register.component';
import { LoginComponent } from 'app/components/authentication/login/login.component';
import {
  AuthenticationService,
  UserService,
  UserGuardService,
  NotificationsService } from '@services';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    AuthenticationService,
    UserService,
    UserGuardService,
    NotificationsService
  ],
})
export class AppAuthenticationModule { }