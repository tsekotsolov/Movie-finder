import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateFavoritesUrl } from './api.constants';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}
  getUserName = () => {
    return localStorage.getItem('username');
  }
  getUserFavoriteMovies = (sessionId: string): Observable<any> =>
   this.http.get<any>(generateFavoritesUrl(sessionId))
}
