import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';

const routes: Routes = [
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'upcoming', component: UpcomingMoviesComponent },
  { path: 'toprated', component: TopRatedMoviesComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
