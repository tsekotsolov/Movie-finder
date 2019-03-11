import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import Movie from '../../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit {

  popular: Array<Movie>;
  theaters: Array<Movie>;
  kids: Array<Movie>;
  drama: Array<Movie>;
  year = new Date().getFullYear();

  constructor(private moviesService: MoviesService) { }

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
