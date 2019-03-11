import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: object;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: string = params.id;
      this.moviesService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

}
