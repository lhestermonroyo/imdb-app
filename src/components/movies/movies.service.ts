import axios from 'axios';
import env from '../../config/env';

import { IGetMovieQry, IGetMoviesBySearchQry } from '../../types';

const API_URL = 'http://www.omdbapi.com/';

const fetchMovie = async ({
  paramOption,
  paramValue,
  otherParams,
}: IGetMovieQry) => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: env.imdbApiKey,
      [paramOption]: paramValue,
      type: otherParams?.type,
      y: otherParams?.year,
      plot: otherParams?.plot || 'short',
    },
  });

  return response.data;
};

const fetchMoviesBySearch = async ({
  search,
  page = 1,
  otherParams,
}: IGetMoviesBySearchQry) => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: env.imdbApiKey,
      s: search,
      page,
      type: otherParams?.type,
      y: otherParams?.year,
    },
  });

  return response.data;
};

export { fetchMovie, fetchMoviesBySearch };
