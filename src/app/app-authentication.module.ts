import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { AuthenticationService, UserService, UserGuardService } from '@services';


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
    UserGuardService
  ],
})
export class AppAuthenticationModule { }
