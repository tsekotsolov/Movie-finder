import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
 generateRequestTokenUrl,
 generateLoginUrl,
 generateSessionUrl
} from './api.constants';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  createRequestToken = (): Observable<any> =>
    this.http.get<any>(generateRequestTokenUrl())

  validateRequestToken = (requestToken: string, formData: any): Observable<any> =>
    this.http.post<any>(generateLoginUrl(), {
      username: formData.username,
      password: formData.password,
      request_token: requestToken
    })

  createSessionId = (requestToken: string): Observable<any> =>
    this.http.post<any>(generateSessionUrl(), {
      request_token: requestToken
    })
}
