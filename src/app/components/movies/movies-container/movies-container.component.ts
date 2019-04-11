import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '@services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent implements OnInit, OnDestroy {
  getFavorites: Observable<any>;
  userSubscription: Subscription;
  userFavorites: [];
  route: string;

  constructor(private userService: UserService, private router: Router ) {}
  ngOnInit() {
    this.route = this.router.url;
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      this.userSubscription = this.userService
        .getUserFavoriteMovies(sessionId)
        .subscribe((data: any) => {
          this.userFavorites = data.results.map((movies: any) => movies.id);
        });
    } else {
      this.userFavorites = [];
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
