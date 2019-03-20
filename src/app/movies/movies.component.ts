import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import Movie from '../../models/movie.model';
import { SearchService } from '../services/search.service';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  popular: Array<Movie>;
  theaters: Array<Movie>;
  kids: Array<Movie>;
  drama: Array<Movie>;


  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  constructor(private moviesService: MoviesService, private searchService: SearchService) { }

  ngOnInit() {

    this.moviesService
      .getPopularMovies()
      .subscribe(data => {
        this.popular = data.results;
       });

    this.moviesService
      .getTheatersMovies()
      .subscribe(data => {
         this.theaters = data.results;
      });

    this.moviesService
      .getKidsMovies()
      .subscribe(data => {
         this.kids = data.results;
      });

    this.moviesService
      .getDramaMovies()
      .subscribe(data => {
         this.drama = data.results;
      });
  }

}
