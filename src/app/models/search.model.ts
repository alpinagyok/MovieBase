export interface ISearchQuery {
  title: string;
  year: string;
  type: string;
}

export interface ISearchState {
  totalPages: number;
  search: ISearchQuery;
}
