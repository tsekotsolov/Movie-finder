import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import MovieDetails from '../../models/movieDetails.model';
import {imageBaseUrl} from '../services/api.constants';
const image = '../../assets/images/noimage.jpg';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: MovieDetails;
  genres: string;
  imageUrl: string;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params.id;
      this.moviesService.getMovie(id).subscribe(movie => {
        console.log(movie);
        this.genres = movie.genres.map((genre: any) => genre.name).join(', ');
        this.movie = movie;
        movie.poster_path
        ? this.imageUrl = `${imageBaseUrl}${movie.poster_path}`
        : this.imageUrl = image;
      });
    });
  }
}
