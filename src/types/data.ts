export type SearchResult = {
  name: string;
  id: number;
};

export type GetSearchResultsResponse = SearchResult[] | [];

export type SearchParam = {
  name: string;
};
