export interface IMovieDetail {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  Plot: string;
  Ratings: { Source: string; Value: string }[];
  Runtime: string;
  Genre: string;
  Response: string;
}
