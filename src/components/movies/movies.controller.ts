import { RouteHandler } from 'fastify';
import { fetchMovie, fetchMoviesBySearch } from './movies.service';

import { IGetMovieQry, IGetMoviesBySearchQry } from '../../types';

const getMovie: RouteHandler<{ Body: IGetMovieQry }> = async (req, res) => {
  try {
    const { paramOption, paramValue, otherParams } = req.body;

    if (!paramOption) {
      return res.status(400).send({ error: 'Missing paramOption' });
    }

    if (!paramValue) {
      return res.status(400).send({ error: 'Missing paramValue' });
    }

    const movie = await fetchMovie({
      paramOption,
      paramValue,
      otherParams,
    });

    res.send(movie);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch movie' });
  }
};

const getMoviesBySearch: RouteHandler<{ Body: IGetMoviesBySearchQry }> = async (
  req,
  res
) => {
  try {
    const { search, page, otherParams } = req.body;

    if (!search) {
      return res.status(400).send({ error: 'Missing search' });
    }

    const movies = await fetchMoviesBySearch({
      search,
      page,
      otherParams,
    });

    res.send(movies);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch movies' });
  }
};

export { getMovie, getMoviesBySearch };
