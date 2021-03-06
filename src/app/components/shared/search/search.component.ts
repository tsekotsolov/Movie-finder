import { Component } from '@angular/core';
import { SearchService } from '@services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  query: string;

  constructor( private searchService: SearchService, private router: Router) {
   }

   redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri])); }

  search(event: any) {

    this.searchService.passQuery(this.query);
    this.query = '';
    this.router.navigate(['movies/search']);
    if (this.router.url === '/movies/search') {
      this.redirectTo('/movies/search');
    }
  }
}
