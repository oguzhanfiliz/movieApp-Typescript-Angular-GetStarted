import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Movies} from './movieDatasource';
import {Observable,of} from 'rxjs';
import { LogginService } from './loggin.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private logginService:LogginService) { }

  getMovies(): Observable<Movie[]>{
    this.logginService.add('MovieService: listing movies');
    return of(Movies);
  }
}
