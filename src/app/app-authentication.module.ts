import { NgModule } from '@angular/core';

import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [],
  providers: [],
})
export class AppAuthenticationModule { }
