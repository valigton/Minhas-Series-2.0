import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PUBLIC_KEY = '0268e9667082b43101efe70dc24d137b';
  URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${this.PUBLIC_KEY}&language=pt-BR&page=1`;

  constructor(private http: HttpClient) { }

  getAllPopular(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe()
  }
}
