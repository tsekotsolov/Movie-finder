import { Component } from '@angular/core';
import { AuthenticationService, NotificationsService } from '@services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(
    private authenticationService: AuthenticationService,
    private notificationService: NotificationsService
  ) {}

login(formData: any) {
   this.authenticationService.login(formData.value)
   .then( _ => {
    this.notificationService.showSuccess('Login Success');
   })
   .catch(err => {
    this.notificationService.showFailure(err);
   });
  }
}
