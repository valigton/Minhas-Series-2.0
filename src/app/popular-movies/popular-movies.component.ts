import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMoviesApiService } from './popular-movies-api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  constructor(private popularSvc: PopularMoviesApiService) { }
  popular: Observable<any>;  
  ngOnInit() {
    this.getPopular();
  } 

  getPopular() {
    this.popular = this.popularSvc.getPopular();
  }
}
