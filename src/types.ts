type OtherParams = {
  type?: 'movie' | 'series' | 'episode';
  year?: string;
  plot?: 'short' | 'full';
};
type ParamsWithoutPlot = Omit<OtherParams, 'plot'>;

export interface IGetMovieQry {
  paramOption: 't' | 'i';
  paramValue: string;
  otherParams?: OtherParams;
}

export interface IGetMoviesBySearchQry {
  search: string;
  page?: number;
  otherParams?: ParamsWithoutPlot;
}
