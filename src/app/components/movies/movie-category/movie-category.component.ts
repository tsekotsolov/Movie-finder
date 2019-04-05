import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { DragScrollComponent } from 'ngx-drag-scroll';

import { MoviesService } from '@services';
import { Movie } from '@models';

@Component({
  selector: 'app-movie-category',
  templateUrl: './movie-category.component.html',
  styleUrls: ['./movie-category.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  @Input() type: string;
  @Input() query: string;

  movies: Array<Movie>;
  getMovies: Observable<any>;
  categoryName: string;
  loading: boolean;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.loading = true;

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

      default:
        break;
    }

    this.getMovies.subscribe(data => {
      this.loading = false;
      data.results.length > 0
        ? (this.movies = data.results)
        : (this.movies = null);
    });
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

}
