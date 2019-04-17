import { Component } from '@angular/core';
import { AuthenticationService, NotificationsService } from '@services';
import { ILoginForm } from '@models';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  username: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private notificationService: NotificationsService
  ) {}

login(formData: {value: ILoginForm}) {
   this.authenticationService.login(formData.value)
   .then( () => {
    this.notificationService.showSuccess('Login Success');
   })
   .catch(err => {
    this.notificationService.showFailure(err);
   });
  }
}
