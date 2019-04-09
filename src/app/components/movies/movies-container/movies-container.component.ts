import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(private userService: UserService) {}
  ngOnInit() {
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
