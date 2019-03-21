import { Component, OnInit } from '@angular/core';
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
  query: string;

  constructor(private searchService: SearchService) {}

  getQuery() {
    this.subscription = this.searchService.navItem.subscribe(item => this.query = item);
  }
  ngOnInit() {
    this.getQuery();
  }
}
