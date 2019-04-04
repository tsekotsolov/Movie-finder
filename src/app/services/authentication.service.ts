import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import {
 generateRequestTokenUrl,
 generateLoginUrl,
 generateSessionUrl,
 generateDeleteSessionUrl
} from './api.constants';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
    ) {}

  emitUserName: EventEmitter<any> = new EventEmitter();

  private createRequestToken = (): Observable<any> =>
    this.http.get<any>(generateRequestTokenUrl())

  private validateRequestToken = (requestToken: string, formData: any): Observable<any> =>
    this.http.post<any>(generateLoginUrl(), {
      username: formData.username,
      password: formData.password,
      request_token: requestToken
    })

  private createSessionId = (requestToken: string): Observable<any> =>
    this.http.post<any>(generateSessionUrl(), {
      request_token: requestToken
    })

  private deleteSession = (): Observable<any> => {

    const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: {
      session_id: localStorage.getItem('sessionId')
    },
  };
    return this.http.delete<any>(generateDeleteSessionUrl(), options);
  }

    login(formData: any) {
      this.createRequestToken().subscribe(data => {
        this.validateRequestToken(data.request_token, formData.value).subscribe(res => {
          this.createSessionId(res.request_token).subscribe(sessionData => {
            localStorage.setItem('sessionId', sessionData.session_id);
            this.userService.getUserDetails(sessionData.session_id).subscribe(userDetails => {
              localStorage.setItem('username', userDetails.username);
              this.emitUserName.emit(userDetails.username);
              this.showSuccess('Login Success');
              this.router.navigate(['/']);
            }, err => console.log(err));
          });
        }, err => {
          console.log(err);
          this.showFailure(err.statusText);
        });
      }, err => console.log(err));
    }

    logout = () => this.deleteSession().subscribe(() => {
      localStorage.removeItem('sessionId');
      localStorage.removeItem('username');
      this.showSuccess('Logout Success');
      this.emitUserName.emit('');
      this.router.navigate(['/']);
    })

    isAuthenticated = () => (
      localStorage.getItem('sessionId') ? true : false
    )

   private showSuccess(message: string) {
      this.toastr.success(message);
    }

   private showFailure(message: string) {
      this.toastr.error(message);
    }

}
