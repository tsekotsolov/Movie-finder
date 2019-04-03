import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '@services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService
  ) {}

  login(formData: any) {
    console.log(formData);
    this.authenticationService.createRequestToken().subscribe(data => {
      this.authenticationService.validateRequestToken(data.request_token, formData.value).subscribe(res => {
        this.authenticationService.createSessionId(res.request_token).subscribe(sessionData => {
          localStorage.setItem('sessionId', sessionData.session_id);
          this.userService.getUserDetails(sessionData.session_id).subscribe(userDetails => {
            console.log(userDetails);
          });
          this.router.navigate(['/']);
        });
      });
    });
  }
}
