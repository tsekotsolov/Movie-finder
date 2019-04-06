import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NotificationsService } from '../notifications/notifications.service';
import { LoadingService } from '../loading/loading.service';
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
    private router: Router,
    private notifications: NotificationsService,
    private loading: LoadingService
  ) {}

  emitUserName: EventEmitter<any> = new EventEmitter();
  createRequest: Subscription;
  validateRequest: Subscription;
  createSession: Subscription;
  removeSession: Subscription;


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
        'Content-Type': 'application/json'
      }),
      body: {
        session_id: localStorage.getItem('sessionId')
      }
    };
    return this.http.delete<any>(generateDeleteSessionUrl(), options);
  }

  login(formData: any) {
    this.loading.emitLoading.emit(true);
    return new Promise((resolve, reject) => {
        Kinvey.User.login(formData.username, formData.password)
        .then( _ => {
             this.createRequest = this.createRequestToken().subscribe(data => {
              this.validateRequest = this.validateRequestToken(data.request_token, formData).subscribe(res => {
                this.createSession = this.createSessionId(res.request_token).subscribe(sessionData => {
                    this.router.navigate(['/']);
                    localStorage.setItem('sessionId', sessionData.session_id);
                    localStorage.setItem('username', formData.username);
                    this.emitUserName.emit(formData.username);
                    this.loading.emitLoading.emit(false);
                    resolve();
                });
              }, err => {
                console.log(err);
                reject(err.statusText);
              });
            }, err => console.log(err));
          })
        .catch((err: Kinvey.BaseError) => {
          console.log(err);
          reject(err.message);
          });
    });
  }

  logout = () =>
    this.deleteSession().subscribe(() => {
      localStorage.removeItem('sessionId');
      localStorage.removeItem('username');
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

    ngOnDestroy() {
      this.createRequest.unsubscribe();
      this.validateRequest.unsubscribe();
      this.createSession.unsubscribe();
      this.removeSession.unsubscribe();
    }
}
