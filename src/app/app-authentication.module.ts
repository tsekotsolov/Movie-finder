import { NgModule } from '@angular/core';

import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule
  ],
  providers: [],
})
export class AppAuthenticationModule { }
