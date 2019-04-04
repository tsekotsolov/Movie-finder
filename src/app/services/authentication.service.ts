import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from './user.service';
import { Router, CanActivate } from '@angular/router';

import {
 generateRequestTokenUrl,
 generateLoginUrl,
 generateSessionUrl,
 generateDeleteSessionUrl
} from './api.constants';


@Injectable()
export class AuthenticationService implements CanActivate {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
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
              this.router.navigate(['/']);
            });
          });
        });
      });
    }

    logout = () => this.deleteSession().subscribe(() => {
      localStorage.removeItem('sessionId');
      localStorage.removeItem('username');
      this.emitUserName.emit('');
    })

    isAuthenticated = () => (
      localStorage.getItem('sessionId') ? true : false
    )

    canActivate(): boolean {
      if (!this.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }

}
