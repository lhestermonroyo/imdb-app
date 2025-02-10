import { FastifyInstance } from 'fastify';
import { getMovie, getMoviesBySearch } from './movies.controller';

const movieRoutes = async (fastify: FastifyInstance) => {
  fastify.get('/details', getMovie);
  fastify.post('/search', getMoviesBySearch);
};

export default movieRoutes;
