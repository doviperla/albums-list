import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesContainerComponent } from './movies/movies-container/movies-container.component';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
