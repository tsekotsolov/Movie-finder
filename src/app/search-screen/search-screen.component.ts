import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import Movie from '../../models/movie.model';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent implements OnInit {

  subscription: Subscription;
  searchItems: Array<Movie>;
  query: string;

  constructor(private moviesService: MoviesService, private searchService: SearchService) {}

  getQuery() {
    this.subscription = this.searchService.navItem.subscribe(item => this.query = item);
  }

  makeSearch()  {
    if (this.query) {
      this.moviesService.findMovies(this.query).subscribe(data => {
        this.searchItems = data.results;
      });
    }
  }
  ngOnInit() {
    this.getQuery();
    this.makeSearch();
  }

}
