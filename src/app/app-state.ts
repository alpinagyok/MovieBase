import { IMovieDetail } from './models/movieDetail.model';
import { IMoviePage } from './models/moviePages.model';
import { ISearchState } from './models/search.model';

export interface AppState {
  moviePages: { [key: string]: IMoviePage };
  movieDetails: { [key: string]: IMovieDetail };
  search: ISearchState;
}
