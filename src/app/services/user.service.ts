import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { generateUserDetailsUrl } from './api.constants';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUserDetails = (sessionId: string): Observable<any> =>
    this.http.get<any>(generateUserDetailsUrl(sessionId))
}
