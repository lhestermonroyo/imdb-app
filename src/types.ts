type OtherParams = {
  type?: 'movie' | 'series' | 'episode';
  year?: string;
  plot?: 'short' | 'full';
};

export interface IGetMoviesBySearchQry {
  query: string;
  page?: number;
  otherParams?: OtherParams;
}
