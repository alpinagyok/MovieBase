import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {
  getMoviePagesRequest,
  getMoviePagesDone,
} from '../actions/moviePages.actions';
import { IMoviePage } from '../models/moviePages.model';
import { setTotalPages } from '../actions/search.actions';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviePagesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMoviePagesRequest),
      switchMap((action) => {
        return this.httpClient
          .get<IMoviePage>(
            `https://www.omdbapi.com/?apikey=${environment.omdbKey}&s=${action.searchQuery.title}&y=${action.searchQuery.year}&type=${action.searchQuery.type}&page=${action.page}`
          )
          .pipe(
            switchMap((moviePage) => {
              if (moviePage.Response === 'True')
                return [
                  getMoviePagesDone({ moviePage, page: action.page }),
                  setTotalPages({
                    totalPages: Math.ceil(Number(moviePage.totalResults) / 10),
                  }),
                ];
              else
                return [
                  // Return "empty" page to show error for this page
                  getMoviePagesDone({
                    moviePage: {
                      Search: null,
                      Response: 'False',
                      totalResults: '0',
                    },
                    page: action.page,
                  }),
                  setTotalPages({
                    totalPages: 0,
                  }),
                ];
            }),
            catchError(() =>
              of(
                getMoviePagesDone({
                  moviePage: {
                    Search: null,
                    Response: 'False',
                    totalResults: '0',
                  },
                  page: action.page,
                }),
                setTotalPages({
                  totalPages: 0,
                })
              )
            )
          );
      })
    )
  );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
