import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Movies} from './movieDatasource';
import {Observable,of} from 'rxjs';
import { LogginService } from './loggin.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiMoviesUrl = 'api/movies';

  constructor(private logginService:LogginService,
    private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    this.logginService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }
 /* getMovie(id) : Observable<Movie>{
    this.logginService.add('MovieService:get detail by id ='+id)
    return of(Movies.find(movie=>movie.id===id));
  }*/
}
