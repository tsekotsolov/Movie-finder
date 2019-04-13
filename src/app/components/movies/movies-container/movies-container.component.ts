import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@services';
import { Observable, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit {

  route: string;
  movieIds$: Observable<{}> = of([]);

  constructor(private userService: UserService, private router: Router ) {
  }
  ngOnInit() {
    this.route = this.router.url;
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
    this.movieIds$ = this.userService.getUserFavoriteMovies(sessionId)
      .pipe(pluck('results'), map((movies: [{}]) => movies.map((movie: {id: {id: number}}) => movie.id)));
    }
  }
}
