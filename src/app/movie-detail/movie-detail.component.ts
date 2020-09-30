import { Component, OnInit } from '@angular/core';
import { IMovieDetail } from '../models/movieDetail.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app-state';
import { getMovieDetailRequest } from '../actions/movieDetail.actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass'],
})
export class MovieDetailComponent implements OnInit {
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  movie$: Observable<IMovieDetail> = this.store.select(
    (state) => state.movieDetails[this.id]
  );

  id: string;

  // Nothing fancy here
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.store.dispatch(getMovieDetailRequest({ id: this.id }));
    });
  }
}
