import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, NotificationsService } from '@services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private notificationService: NotificationsService,
    private router: Router) { }

  ngOnInit() {

  }

  register(formData: {value: any}) {
    this.authenticationService.register(formData.value).then( () => {
      this.notificationService.showSuccess('Register Success');
      this.router.navigate(['/login']);
     })
     .catch(err => {
      this.notificationService.showFailure(err);
     });
 }

}
