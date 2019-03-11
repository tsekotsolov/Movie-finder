import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import Movies from '../../models/movies.model';
import {popularUrl, theatersUrl, kidsUrl, dramaUrl, generateMovieUrl, generateSearchUrl} from '../services/api.constants';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {}

  getPopularMovies = (): Observable<Movies> => this.http.get<Movies>(popularUrl);
  getTheatersMovies = (): Observable<Movies> => this.http.get<Movies>(theatersUrl);
  getKidsMovies = (): Observable<Movies> => this.http.get<Movies>(kidsUrl);
  getDramaMovies = (): Observable<Movies> => this.http.get<Movies>(dramaUrl);
  getMovie = (id: string): Observable<object> => this.http.get<object>(generateMovieUrl(id));
  findMovies = (query: string): Observable<object> => this.http.get<object>(generateSearchUrl(query));

}
