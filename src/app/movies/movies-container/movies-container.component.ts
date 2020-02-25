import { MOVIES } from './../../mocks/movies.mock';
import { Movie } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {

  movies: Movie[];
  selectedMovie: Movie;

  constructor() {

  }

  ngOnInit() {
    window.setTimeout(() => {
      this.movies = MOVIES;
    }, 2000);
  }

  onMovieSelected(movie: Movie) {
    this.selectedMovie = movie;
  }



}
