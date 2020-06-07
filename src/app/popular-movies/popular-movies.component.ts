import { Component, OnInit  } from '@angular/core';
import { PopularMoviesApiService } from './popular-movies-api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  PUBLIC_KEY = '0268e9667082b43101efe70dc24d137b';
  URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${this.PUBLIC_KEY}&language=pt-BR&page=1`;
  MOVIES

  constructor(public popularSvc: PopularMoviesApiService) { }
  ngOnInit() {
     fetch(this.URL_API)
    .then(res => res.json()).then(data => {
      console.log(data.results)
      data.results.map(data => {
        this.MOVIES = {
          name: data.title,
          date: data.release_date,
          image: data.backdrop_path,
        }  
      })
    })
  }

}
