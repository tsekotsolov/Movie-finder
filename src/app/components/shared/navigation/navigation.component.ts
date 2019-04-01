import { Component } from '@angular/core';
import { SearchService } from '@services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  title: string;
  query: string;

  constructor( private searchService: SearchService, private router: Router) {
    this.title = 'Movie Finder';
   }

   redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri])); }

  search() {
    this.searchService.passQuery(this.query);
    this.query = '';
    this.router.navigate(['search']);
    if (this.router.url === '/search') {
      this.redirectTo('search');
    }
  }
}
