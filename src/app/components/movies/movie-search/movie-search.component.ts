import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '@services';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  subscription: Subscription;
  query: string;

  constructor(private searchService: SearchService) {}

  getQuery() {
    this.subscription = this.searchService.navItem.subscribe(item => this.query = item);
  }
  ngOnInit() {
    this.getQuery();
  }
}
