import { createReducer, on } from '@ngrx/store';
import { getMovieDetailDone } from '../actions/movieDetail.actions';

export const movieDetailReducer = createReducer(
  {},
  on(getMovieDetailDone, (state, action) => {
    const {
      imdbID,
      Title,
      Year,
      Type,
      Poster,
      Plot,
      Ratings,
      Runtime,
      Genre,
    } = action.movieDetail;

    // Keep max 50 movieDetails in state, so that there won't be infinite amount of movies in state
    if (Object.keys(state).length < 50)
      return {
        ...state,
        [imdbID]: {
          imdbID,
          Title,
          Year,
          Type,
          Poster,
          Plot,
          Ratings,
          Runtime,
          Genre,
        },
      };
    else {
      let movieDetails = { ...state };
      // Remove the first movie (the oldest added)
      delete movieDetails[Object.keys(movieDetails)[0]];

      // Add new movie to state
      return {
        ...movieDetails,
        [imdbID]: {
          imdbID,
          Title,
          Year,
          Type,
          Poster,
          Plot,
          Ratings,
          Runtime,
          Genre,
        },
      };
    }
  })
);
