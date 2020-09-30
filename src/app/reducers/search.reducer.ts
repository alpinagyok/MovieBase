import { createReducer, on } from '@ngrx/store';
import { changeSearchRequest, setTotalPages } from '../actions/search.actions';

export const searchReducer = createReducer(
  { totalPages: 0 },
  on(setTotalPages, (state, action) => {
    return {
      ...state,
      totalPages: action.totalPages,
    };
  }),
  on(changeSearchRequest, (state, action) => {
    return {
      ...state,
      search: action.search,
    };
  })
);
