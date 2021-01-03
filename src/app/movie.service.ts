import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Movies} from './movieDatasource';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[]{
    return Movies;
  }
}
