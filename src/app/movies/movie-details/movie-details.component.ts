import { Movie } from './../../models/movie.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input()
  selectedMovie:Movie;

  @Output()
  changeYear:EventEmitter<string>;

  constructor() {
    this.changeYear = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  onChangeYear(year:string){
    this.changeYear.emit(year);
  }

}
