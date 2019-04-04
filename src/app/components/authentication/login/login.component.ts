import { Component } from '@angular/core';
import { AuthenticationService } from '@services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(
    private authenticationService: AuthenticationService,
  ) {}

 login(formData: any) {
    this.authenticationService.login(formData);
  }
}
