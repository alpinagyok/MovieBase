import { createAction, props } from '@ngrx/store';
import { ISearchQuery } from '../models/search.model';

export const setTotalPages = createAction(
  '[Search] Set Total Pages',
  props<{ totalPages: number }>()
);

export const changeSearchRequest = createAction(
  '[Search] Change Search Query',
  props<{ search: ISearchQuery }>()
);
