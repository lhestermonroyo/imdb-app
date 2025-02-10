import { FastifyInstance } from 'fastify';
import { getMovie, getMoviesBySearch } from './movies.controller';

const movieRoutes = async (fastify: FastifyInstance) => {
  fastify.post('/search', getMoviesBySearch);
  fastify.post('/details', getMovie);
};

export default movieRoutes;
