import { RouteHandler } from 'fastify';
import { fetchMovie, fetchMoviesBySearch } from './movies.service';

import { IGetMoviesBySearchQry } from '../../types';

const getMovie: RouteHandler<{ Querystring: { id: string } }> = async (
  req,
  res
) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).send({ error: 'Missing movie id' });
    }

    const movie = await fetchMovie(id);

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
    const { query, page, otherParams } = req.body;

    if (!query) {
      return res.status(400).send({ error: 'Missing query' });
    }

    const movies = await fetchMoviesBySearch({
      query,
      page,
      otherParams,
    });

    res.send(movies);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch list of movies' });
  }
};

export { getMovie, getMoviesBySearch };
