import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';

@Injectable()
export class MovieDetailsResolver implements Resolve<object> {
  constructor(private moviesService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    const movie = this.moviesService.getMovie(id);
    const cast = this.moviesService.getMovieCast(id);
    return forkJoin(movie, cast);
  }
}
