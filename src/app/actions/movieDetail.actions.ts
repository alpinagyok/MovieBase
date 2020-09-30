import { createAction, props } from '@ngrx/store';
import { IMovieDetail } from '../models/movieDetail.model';

export const getMovieDetailRequest = createAction(
  '[MovieDetails] Get Movie Request',
  props<{ id: string }>()
);
export const getMovieDetailDone = createAction(
  '[MovieDetails] Get Movie Done',
  props<{ movieDetail: IMovieDetail }>()
);
