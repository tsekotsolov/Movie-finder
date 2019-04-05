import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies, MovieDetails } from '@models';
import {
  popularUrl,
  theatersUrl,
  kidsUrl,
  dramaUrl,
  generateMovieUrl,
  generateSearchUrl,
  generateCastUrl
} from './api.constants';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies = (): Observable<Movies> =>
    this.http.get<Movies>(popularUrl)
  getTheatersMovies = (): Observable<Movies> =>
    this.http.get<Movies>(theatersUrl)
  getKidsMovies = (): Observable<Movies> => this.http.get<Movies>(kidsUrl);
  getDramaMovies = (): Observable<Movies> => this.http.get<Movies>(dramaUrl);
  getMovie = (id: number): Observable<MovieDetails> =>
    this.http.get<MovieDetails>(generateMovieUrl(id))
  findMovies = (query: string): Observable<Movies> =>
    this.http.get<Movies>(generateSearchUrl(query))
  getMovieCast = (id: number): Observable<any> =>
    this.http.get<any>(generateCastUrl(id))

}
