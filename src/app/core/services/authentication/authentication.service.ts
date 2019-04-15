import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { NotificationsService } from '../notifications/notifications.service';
import { LoadingService } from '../loading/loading.service';
import { Kinvey } from 'kinvey-angular2-sdk';
import { ILoginForm } from '@models';
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
    private router: Router,
    private notifications: NotificationsService,
    private loading: LoadingService,
  ) {}

  emitUserName: EventEmitter<string> = new EventEmitter();

  createRequest: Subscription;
  validateRequest: Subscription;
  createSession: Subscription;
  removeSession: Subscription;


  private createRequestToken = (): Observable<{request_token: string}> =>
    this.http.get<{request_token: string}>(generateRequestTokenUrl())

  private validateRequestToken = (requestToken: string, formData: ILoginForm): Observable<{request_token: string}> =>
    this.http.post<{request_token: string}>(generateLoginUrl(), {
      username: formData.username,
      password: formData.password,
      request_token: requestToken
    })

  private createSessionId = (requestToken: string): Observable<{session_id: string}> =>
    this.http.post<{session_id: string}>(generateSessionUrl(), {
      request_token: requestToken
    })

  private deleteSession = (): Observable<{}> => {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        session_id: localStorage.getItem('sessionId')
      }
    };
    return this.http.delete<{}>(generateDeleteSessionUrl(), options);
  }

  login(formData: ILoginForm) {
    this.loading.emitLoading.emit(true);
    return new Promise((resolve, reject) => {
        Kinvey.User.login(formData.username, formData.password)
        .then( (response: any) => {
             localStorage.setItem('kinveyToken', response.authtoken);
             const role = response.data._kmd.roles;
             if (role) {
              localStorage.setItem('roleId', response.data._kmd.roles[0].roleId);
             }
             this.createRequest = this.createRequestToken().subscribe(data => {
              this.validateRequest = this.validateRequestToken(data.request_token, formData).subscribe(res => {
                this.createSession = this.createSessionId(res.request_token).subscribe(sessionData => {
                    this.router.navigate(['/movies']);
                    localStorage.setItem('sessionId', sessionData.session_id);
                    localStorage.setItem('username', formData.username);
                    this.emitUserName.emit(formData.username);
                    this.loading.emitLoading.emit(false);
                    resolve();
                });
              }, err => {
                console.log(err);
                this.loading.emitLoading.emit(false);
                reject(err.statusText);
              });
            }, err => {
              console.log(err);
              this.loading.emitLoading.emit(false);
            });
          })
        .catch((err: Kinvey.BaseError) => {
          console.log(err);
          this.loading.emitLoading.emit(false);
          reject(err.message);
          this.logout();
          });
    });
  }

  logout = () =>
    this.deleteSession().subscribe(() => {
      localStorage.removeItem('sessionId');
      localStorage.removeItem('username');
      localStorage.removeItem('roleId');
      localStorage.removeItem('kinveyToken');
      this.notifications.showSuccess('Logout Success');
      this.emitUserName.emit('');
      this.router.navigate(['/']);
      Kinvey.User.logout()
      .then((data: any) => {
        console.log(data);
      })
      .catch((err: Kinvey.BaseError) => {
        console.log(err);
      });
    })

    isAuthenticated = () => localStorage.getItem('sessionId') && true;
    isAdmin = () => localStorage.getItem('roleId') && true;

    ngOnDestroy() {
      this.createRequest.unsubscribe();
      this.validateRequest.unsubscribe();
      this.createSession.unsubscribe();
      this.removeSession.unsubscribe();
    }
}
