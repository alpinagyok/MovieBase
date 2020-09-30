export interface IMoviePreview {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMoviePage {
  Search: { IMoviePreview }[];
  Response: string;
  totalResults: string;
}
