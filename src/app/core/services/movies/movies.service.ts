import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies, IMovieDetails, ICast } from '@models';
import {
  popularUrl,
  theatersUrl,
  kidsUrl,
  dramaUrl,
  generateMovieUrl,
  generateSearchUrl,
  generateCastUrl
} from '../api.constants';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies = (): Observable<IMovies> =>
    this.http.get<IMovies>(popularUrl)
  getTheatersMovies = (): Observable<IMovies> =>
    this.http.get<IMovies>(theatersUrl)
  getKidsMovies = (): Observable<IMovies> => this.http.get<IMovies>(kidsUrl);
  getDramaMovies = (): Observable<IMovies> => this.http.get<IMovies>(dramaUrl);
  getMovie = (id: number): Observable<IMovieDetails> =>
    this.http.get<IMovieDetails>(generateMovieUrl(id))
  findMovies = (query: string): Observable<IMovies> =>
    this.http.get<IMovies>(generateSearchUrl(query))
  getMovieCast = (id: number): Observable<ICast> =>
    this.http.get<ICast>(generateCastUrl(id))
}
