import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  title: string;

  constructor(private moviesService: MoviesService) {
    this.title = 'Movie Finder';
   }

  ngOnInit() {
  }

  search(query) {
    this.moviesService.findMovies(query.search).subscribe(data => {
      console.log(data);
    });
  }


}
