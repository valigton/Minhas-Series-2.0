import { ApiService } from '../api.service';
import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  constructor( private popularSvc: ApiService) { }
  allPopular: Observable<any>;
  
  ngOnInit() {
    this.getPopular();
  }
  
  getPopular() {
    this.allPopular = this.popularSvc.getAllPopular();
  }
}
