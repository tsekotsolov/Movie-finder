import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { MoviesService, LoadingService, UserService } from '@services';
import { IMovie, IMovies } from '@models';


@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit, OnDestroy {
  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  @Input() type: string;
  @Input() query: string;
  @Input() userFavorites: [];

  movies: Array<IMovie>;
  getMovies: Observable<IMovies>;
  categoryName: string;
  loading: boolean;
  movieSubscription: Subscription;

  constructor(
    private moviesService: MoviesService,
    private emitLoading: LoadingService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.emitLoading.emitLoading.emit(this.loading);


    switch (this.type) {
      case 'popular':
        this.getMovies = this.moviesService.getPopularMovies();
        this.categoryName = 'Popular Movies';
        break;

      case 'theaters':
        this.getMovies = this.moviesService.getTheatersMovies();
        this.categoryName = 'In Theaters';
        break;

      case 'kids':
        this.getMovies = this.moviesService.getKidsMovies();
        this.categoryName = 'Kids Movies';
        break;

      case 'drama':
        this.getMovies = this.moviesService.getDramaMovies();
        this.categoryName = 'Best Drama';
        break;

      case 'search':
        this.getMovies = this.moviesService.findMovies(this.query);
        this.categoryName = 'Search results';
        break;

      case 'favorites':
      this.getMovies = this.userService.getUserFavoriteMovies(localStorage.getItem('sessionId'));
      this.categoryName = 'Favorites';
      break;

      default:
        break;
    }

    this.movieSubscription = this.getMovies.subscribe(data => {
      this.loading = false;
      this.emitLoading.emitLoading.emit(this.loading);
      data.results.length > 0
        ? this.movies = data.results
        : this.movies = null;
    });

  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  ngOnDestroy() {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
  }
}
