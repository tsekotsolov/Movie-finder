import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails, Cast } from '@models';
import { imageBaseUrl } from '@services';
const image = '../../assets/images/noimage.gif';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieDetails;
  genres: string;
  imageUrl: string;
  cast: Cast;
  vote: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.movie = this.route.snapshot.data.movieDetails[0];
    this.vote = this.movie.vote_average * 10 + ',100';
    console.log(this.movie);
    this.cast = this.route.snapshot.data.movieDetails[1].cast
      .slice(0, 4)
      .map((actor: any) => {
      return {
        actorName: actor.name,
        actorImageUrl: actor.profile_path ? `${imageBaseUrl}${actor.profile_path}` : image
      };
    });
    this.genres = this.movie.genres.map((genre: any) => genre.name).join(', ');
    this.movie.poster_path
      ? (this.imageUrl = `${imageBaseUrl}${this.movie.poster_path}`)
      : (this.imageUrl = image);
  }
}
