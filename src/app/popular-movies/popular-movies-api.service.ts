import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesApiService {
  PUBLIC_KEY = '0268e9667082b43101efe70dc24d137b';
  URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${this.PUBLIC_KEY}&language=pt-BR&page=1`;
  constructor(private http: HttpClient) { }

  getPopular(): Observable<any> {
    return this.http.get<any>(this.URL_API)
  }
}
