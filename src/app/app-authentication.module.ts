import { NgModule } from '@angular/core';

import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService, UserService } from '@services';


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
    UserService
  ],
})
export class AppAuthenticationModule { }
