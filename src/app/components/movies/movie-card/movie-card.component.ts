import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import Movie from '../../../../models/movie.model';
import {imageBaseUrl} from '../../../services/api.constants';

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

  constructor() {}

  ngOnInit() {
    this.movie.title = this.movie.title.slice(0, 15);
    const elementWidth = this.width.nativeElement.offsetWidth;
    this.height = `${elementWidth * 1.5}px`;
    this.movie.poster_path
      ? this.imageUrl = imageBaseUrl + this.movie.poster_path
      : this.imageUrl = '../../assets/images/noimage.jpg';
  }

  onResize() {
    const currentWidth = this.width.nativeElement.offsetWidth;
    this.height = `${currentWidth * 1.5}px`;
  }

}
