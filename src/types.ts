type OtherParams = {
  type?: 'movie' | 'series' | 'episode';
  year?: string;
  plot?: 'short' | 'full';
};

export interface IGetMoviesBySearchQry {
  search: string;
  page?: number;
  otherParams?: OtherParams;
}
