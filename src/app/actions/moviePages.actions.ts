import { createAction, props } from '@ngrx/store';
import { IMovieDetail } from '../models/movieDetail.model';
import { ISearchQuery } from '../models/search.model';
import { IMoviePage } from '../models/moviePages.model';

export const getMoviePagesRequest = createAction(
  '[MoviePages] Get Movie Page Request',
  props<{ searchQuery: ISearchQuery; page: string }>()
);
export const getMoviePagesDone = createAction(
  '[MoviePages] Get Movie Page Done',
  props<{ moviePage: IMoviePage; page: string }>()
);
export const clearMoviePages = createAction(
  '[MoviePages] Glear Movie Pages',
  props<{}>()
);
