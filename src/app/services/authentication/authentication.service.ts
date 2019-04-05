import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../notifications/notifications.service';
import { Kinvey } from 'kinvey-angular2-sdk';

import {
  generateRequestTokenUrl,
  generateLoginUrl,
  generateSessionUrl,
  generateDeleteSessionUrl
} from '../api.constants';


@Injectable()
export class AuthenticationService implements OnDestroy {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private notifications: NotificationsService,
  ) {}

  emitUserName: EventEmitter<any> = new EventEmitter();
  createRequest: Subscription;
  validateRequest: Subscription;
  createSession: Subscription;


  private createRequestToken = (): Observable<any> =>
    this.http.get<any>(generateRequestTokenUrl())

  private validateRequestToken = (
    requestToken: string,
    formData: any
  ): Observable<any> =>
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
        'Content-Type': 'application/json'
      }),
      body: {
        session_id: localStorage.getItem('sessionId')
      }
    };
    return this.http.delete<any>(generateDeleteSessionUrl(), options);
  }

  login(formData: any) {
    Kinvey.User.login(formData.value.username, formData.value.password)
      .then((user: Kinvey.User) => {
       this.createRequest = this.createRequestToken().subscribe(data => {
          this.validateRequest = this.validateRequestToken(data.request_token, formData.value).subscribe(res => {
            this.createSession = this.createSessionId(res.request_token).subscribe(sessionData => {
              localStorage.setItem('sessionId', sessionData.session_id);
              this.userService.getUserDetails(sessionData.session_id).subscribe(userDetails => {
                localStorage.setItem('username', userDetails.username);
                this.emitUserName.emit(userDetails.username);
                this.notifications.showSuccess('Login Success');
                this.router.navigate(['/']);
              }, err => console.log(err));
            });
          }, err => {
            console.log(err);
            this.notifications.showFailure(err.statusText);
          });
        }, err => console.log(err));
      })
      .catch((error: Kinvey.BaseError) => {
        console.log(error);
        this.notifications.showFailure('Unauthorized');
      });
  }

  // login(formData: any) {
  //   this.createRequestToken().subscribe(data => {
  //     this.validateRequestToken(data.request_token, formData.value).subscribe(res => {
  //       this.createSessionId(res.request_token).subscribe(sessionData => {
  //         localStorage.setItem('sessionId', sessionData.session_id);
  //         this.userService.getUserDetails(sessionData.session_id).subscribe(userDetails => {
  //           localStorage.setItem('username', userDetails.username);
  //           this.emitUserName.emit(userDetails.username);
  //           this.notifications.showSuccess('Login Success');
  //           this.router.navigate(['/']);
  //           Kinvey.User.login(formData.value.username, formData.value.password)
  //             .then(user => console.log(user))
  //             .catch(err => console.log(err));
  //         }, err => console.log(err));
  //       });
  //     }, err => {
  //       console.log(err);
  //       this.notifications.showFailure(err.statusText);
  //     });
  //   }, err => console.log(err));
  // }

  logout = () =>
    this.deleteSession().subscribe(() => {
      localStorage.removeItem('sessionId');
      localStorage.removeItem('username');
      this.notifications.showSuccess('Logout Success');
      this.emitUserName.emit('');
      this.router.navigate(['/']);
      Kinvey.User.logout()
      .then((data) => {
        console.log(data);
      })
      .catch((err: Kinvey.BaseError) => {
        console.log(err);
      });
    })

  isAuthenticated = () => (localStorage.getItem('sessionId') ? true : false);

  ngOnDestroy() {
    this.createRequest.unsubscribe();
    this.validateRequest.unsubscribe();
    this.createSession.unsubscribe();
  }
}
