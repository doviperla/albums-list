import { Movie } from './../../models/movie.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input()
  innerMovies: Movie[];

  @Output()
  movieSelected:EventEmitter<Movie>;

  constructor() { 
    this.movieSelected = new EventEmitter<Movie>();
  }

  ngOnInit() {
  }

  onSelectedMovie(movie: Movie)
  {
    this.movieSelected.emit(movie);
  }

}
