import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateFavoritesUrl, generateAddRemoveFavoritesUrl } from './api.constants';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}
  getUserName = () => {
    return localStorage.getItem('username');
  }
  getUserFavoriteMovies = (sessionId: string): Observable<any> =>
   this.http.get<any>(generateFavoritesUrl(sessionId))

  addMovieToFavorites = (sessionId: string, movieId: number): Observable<any> =>
  this.http.post<any>(generateAddRemoveFavoritesUrl(sessionId), {
    media_type: 'movie',
    media_id: movieId,
    favorite: true
  })

  removeMovieFromFavorites = (sessionId: string, movieId: number): Observable<any> =>
  this.http.post<any>(generateAddRemoveFavoritesUrl(sessionId), {
    media_type: 'movie',
    media_id: movieId,
    favorite: false
  })
}
