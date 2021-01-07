import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const movies = [
      {id:1,name:"movie1",description:"güzel film",imageUrl:"1.jpg"},
      {id:2,name:"movie2",description:"güzel film",imageUrl:"1.jpg"},
      {id:3,name:"movie3",description:"güzel film",imageUrl:"1.jpg"},
      {id:4,name:"movie3",description:"güzel film",imageUrl:"1.jpg"},
      {id:5,name:"movie3",description:"güzel film",imageUrl:"1.jpg"},
      {id:6,name:"movie3",description:"güzel film",imageUrl:"1.jpg"}

    ];
    return {movies};
  }
  constructor() { }
}
