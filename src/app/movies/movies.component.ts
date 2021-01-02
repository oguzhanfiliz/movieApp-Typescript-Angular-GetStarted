import { Component } from "@angular/core";
import { Movies } from "../movieDatasource";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html'
})
export class MoviesComponent{

  title="Movie List";
  movies = Movies;

}
