import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import {
  getMovieDetailRequest,
  getMovieDetailDone,
} from '../actions/movieDetail.actions';
import { IMovieDetail } from '../models/movieDetail.model';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovieDetailRequest),
      switchMap((action) => {
        return this.httpClient
          .get<IMovieDetail>(
            `https://www.omdbapi.com/?apikey=f79aeba3&i=${action.id}`
          )
          .pipe(
            map((movieDetail) => {
              if (movieDetail.Response === 'True')
                return getMovieDetailDone({ movieDetail });
              // If it was a bad request or omdb error, will store "empty" movie in ngrx, so an error page can be displayed
              else
                return getMovieDetailDone({
                  movieDetail: {
                    imdbID: action.id,
                    Title: null,
                    Year: null,
                    Type: null,
                    Poster: null,
                    Plot: null,
                    Ratings: null,
                    Runtime: null,
                    Genre: null,
                    Response: null,
                  },
                });
            }),
            catchError(() =>
              of(
                getMovieDetailDone({
                  movieDetail: {
                    imdbID: action.id,
                    Title: null,
                    Year: null,
                    Type: null,
                    Poster: null,
                    Plot: null,
                    Ratings: null,
                    Runtime: null,
                    Genre: null,
                    Response: null,
                  },
                })
              )
            )
          );
      })
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
