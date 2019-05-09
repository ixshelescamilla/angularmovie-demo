import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models
import { MovieShort } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public getMoviesByPopularity() : Observable<any> {
    return this.http.get('https://api.themoviedb.org/4/discover/movie?sort_by=popularity.desc&api_key=81e62e7b57bda8891bd2fe3dd4291456 ')
    .pipe(
      map(data => data),
      catchError(error => error)
    )
  }

  public getSearch(searchText: string): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?s=${searchText}&apikey=c9b669b`)
      .pipe(
        map((data: Array<MovieShort>) => data),
        catchError(error => error)
      );
  }
}
