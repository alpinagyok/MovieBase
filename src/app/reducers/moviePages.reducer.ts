import { createReducer, on } from '@ngrx/store';
import {
  clearMoviePages,
  getMoviePagesDone,
} from '../actions/moviePages.actions';

export const moviePagesReducer = createReducer(
  {},
  on(getMoviePagesDone, (state, action) => {
    return {
      ...state,
      [action.page]: { Search: action.moviePage.Search },
    };
  }),
  on(clearMoviePages, () => {
    return {};
  })
);
