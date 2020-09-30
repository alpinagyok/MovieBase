import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../app-state';
import { IMoviePage } from '../models/moviePages.model';
import {
  clearMoviePages,
  getMoviePagesRequest,
} from '../actions/moviePages.actions';
import { changeSearchRequest, setTotalPages } from '../actions/search.actions';
import { ISearchQuery } from '../models/search.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  moviePage$: Observable<IMoviePage> = this.store.select(
    (state) => state.moviePages[String(this.urlPage)]
  );
  moviePage: IMoviePage;

  search$: Observable<ISearchQuery> = this.store.select(
    (state) => state.search.search
  );
  search: ISearchQuery;

  urlPage: number;

  searchQuery: ISearchQuery = {
    title: '',
    year: '',
    type: '',
  };

  ngOnInit() {
    this.search$.subscribe((currentsearch) => {
      this.search = currentsearch;
    });
    this.moviePage$.subscribe((moviePage) => {
      this.moviePage = moviePage;
    });

    combineLatest([this.route.paramMap, this.route.queryParams])
      .pipe(
        map((results) => ({
          // Full information of search request is taken from url
          page: results[0].get('page').replace('?', ''),
          query: results[1],
        }))
      )
      .subscribe((results) => {
        const { query } = results;
        // Protection from typing such a link. Impossible to do in the app itself, because it will give an alert
        if (!query.title) this.router.navigate(['/']);
        else {
          this.urlPage = Number(results.page);

          this.searchQuery = {
            title: query.title ? query.title : '',
            year: query.year ? query.year : '',
            type: query.type ? query.type : '',
          };

          if (
            // If search changes, clears pages. Otherwise since first page of last search
            // is in store, it will show that first and then flash with proper page
            JSON.stringify(this.search) !== JSON.stringify(this.searchQuery)
          ) {
            this.store.dispatch(clearMoviePages({}));
            this.store.dispatch(setTotalPages({ totalPages: 0 }));
          }

          // Store search request to check when we need to clear the pages
          this.store.dispatch(
            changeSearchRequest({
              search: this.searchQuery,
            })
          );

          if (!this.moviePage) {
            this.store.dispatch(
              getMoviePagesRequest({
                searchQuery: this.searchQuery,
                page: results.page,
              })
            );
          }
        }
      });
  }
}
