import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generateFavoritesUrl, generateAddRemoveFavoritesUrl, generateKinveyUsersUrl } from '../api.constants';
import { Observable } from 'rxjs';
import { IMovies } from '@models';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}
  getUserName = () => {
    return localStorage.getItem('username');
  }
  getUserFavoriteMovies = (sessionId: string): Observable<IMovies> =>
   this.http.get<IMovies>(generateFavoritesUrl(sessionId))

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

  getAllUsers = () => {
    return this.http.get(generateKinveyUsersUrl(),
    {
      headers: {
        Authorization: 'Kinvey ' + localStorage.getItem('kinveyToken'),
        'Content-Type': 'application/json'
      },
    }
    );
  }
}
