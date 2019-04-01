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

  constructor() {}

  ngOnInit() {
    if (this.movie.overview.length > 200 ) {
      // const regex = /.{200}[' ']/gm;
      // this.movie.overview = regex.exec(this.movie.overview)[0].concat('...');
      this.movie.overview = this.movie.overview.slice(0, 200);
      const index = this.movie.overview.lastIndexOf(' ');
      this.movie.overview = this.movie.overview.slice(0, index).concat('...');
    }

    const elementWidth = this.width.nativeElement.offsetWidth;
    this.height = `${elementWidth * 1.5}px`;
    this.movie.poster_path
      ? (this.imageUrl = imageBaseUrl + this.movie.poster_path)
      : (this.imageUrl = '../../assets/images/noimage.jpg');
  }

  onResize() {
    const currentWidth = this.width.nativeElement.offsetWidth;
    this.height = `${currentWidth * 1.5}px`;
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
