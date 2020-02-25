import { Movie } from './../../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {

  movie:Movie;

  constructor() { 
    this.movie = new Movie(3,'Toy Story', 1995);
  }

  ngOnInit() {
  }

  titleChanged(event)
  {
    console.log(event);
  }

  onSaveMovie(value:string)
  {
    this.movie.title = value;
  }

  createNew()
  {
    
  }

}
