import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Movie } from '@models';
import { imageBaseUrl } from '@services';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @ViewChild('width') width: ElementRef;
  @Input() movie: Movie;

  private height: string;
  private imageUrl: string;
  private isFlipped = false;
  private overview: string;

  constructor() {}

  ngOnInit() {
    this.movie.overview.length > 500
      ? this.overview = this.trimOverview(this.movie.overview)
      : this.overview = this.movie.overview;

    const elementWidth = this.width.nativeElement.offsetWidth;
    this.height = `${elementWidth * 1.5}px`;
    this.movie.poster_path
      ? (this.imageUrl = imageBaseUrl + this.movie.poster_path)
      : (this.imageUrl = '../../assets/images/no-image-yet.jpg');
  }

  onResize() {
    const currentWidth = this.width.nativeElement.offsetWidth;
    this.height = `${currentWidth * 1.5}px`;
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  trimOverview(overview: string) {
    overview = overview.slice(0, 500);
    const index = overview.lastIndexOf(' ');
    return overview.slice(0, index).concat('...');
  }
}
