import { Component, OnInit, Input, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { IMovie } from '@models';
import { imageBaseUrl, UserService } from '@services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnDestroy {
  @ViewChild('width') width: ElementRef;
  @Input() movie: IMovie;
  @Input() userFavorites: [number];

  private height: string;
  private imageUrl: string;
  private isFlipped = false;
  private overview: string;
  private isFavorite = false;
  private addToFavSubscription: Subscription;
  private removeFromFavSubscription: Subscription;
  private sessionId: string;

  constructor(private userService: UserService, private router: Router) {
    this.sessionId = localStorage.getItem('sessionId');
  }

  ngOnInit() {
    this.movie.overview.length > 300
      ? (this.overview = this.trimOverview(this.movie.overview))
      : (this.overview = this.movie.overview);

    const elementWidth = this.width.nativeElement.offsetWidth;
    this.height = `${elementWidth * 1.5}px`;
    this.movie.poster_path
      ? (this.imageUrl = imageBaseUrl + this.movie.poster_path)
      : (this.imageUrl = '../../assets/images/no-image-yet.jpg');

    if (this.userFavorites) {
      this.userFavorites.includes(this.movie.id)
      ? this.isFavorite = true
      : this.isFavorite = false;
    }
  }

  onResize() {
    const currentWidth = this.width.nativeElement.offsetWidth;
    this.height = `${currentWidth * 1.5}px`;
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  trimOverview(overview: string) {
    overview = overview.slice(0, 300);
    const index = overview.lastIndexOf(' ');
    return overview.slice(0, index).concat('...');
  }

  addToFavorites(id: number) {
    if (this.sessionId) {
      this.addToFavSubscription = this.userService.addMovieToFavorites(this.sessionId, id)
        .subscribe(() => this.isFavorite = true);
    } else {
      this.router.navigate(['login']);
    }
  }

  removeFromFavorites(id: number) {
    if (this.sessionId) {
      this.removeFromFavSubscription = this.userService.removeMovieFromFavorites(this.sessionId, id)
        .subscribe(() => this.isFavorite = false);
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnDestroy() {
    if (this.addToFavSubscription) {
      this.addToFavSubscription.unsubscribe();
    }
    if (this.removeFromFavSubscription) {
      this.removeFromFavSubscription.unsubscribe();
    }
  }
}
