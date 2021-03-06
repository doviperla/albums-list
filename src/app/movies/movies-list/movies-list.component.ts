import { Movie } from './../../models/movie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input()
  innerMovies: Movie[];
  constructor() { }

  ngOnInit() {
  }

}
