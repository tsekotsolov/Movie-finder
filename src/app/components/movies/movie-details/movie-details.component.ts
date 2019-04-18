import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails, ICast } from '@models';
import { imageBaseUrl } from '@services';
const image = 'https://res.cloudinary.com/tsekotsolov/image/upload/v1555588508/no-image-yet.jpg';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovieDetails;
  genres: string;
  imageUrl: string;
  cast: ICast;
  vote: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.movie = this.route.snapshot.data.movieDetails[0];
    this.vote = this.movie.vote_average * 10 + ',100';
    this.cast = this.route.snapshot.data.movieDetails[1].cast
      .slice(0, 4)
      .map((actor: {name: string, profile_path: string}) => {
      return {
        actorName: actor.name,
        actorImageUrl: actor.profile_path ? `${imageBaseUrl}${actor.profile_path}` : image
      };
    });
    this.genres = this.movie.genres.map((genre: {name: string}) => genre.name).join(', ');
    this.movie.poster_path
      ? (this.imageUrl = `${imageBaseUrl}${this.movie.poster_path}`)
      : (this.imageUrl = image);
  }
}
