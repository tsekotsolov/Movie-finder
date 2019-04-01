import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieDetails from '../../../../models/movieDetails.model';
import { imageBaseUrl } from '../../../services/api.constants';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.movie = this.route.snapshot.data.movieDetails;
   console.log(this.movie);
   this.genres = this.movie.genres.map((genre: any) => genre.name).join(', ');
   this.movie.poster_path
   ? this.imageUrl = `${imageBaseUrl}${this.movie.poster_path}`
   : this.imageUrl = image;
  }
}
