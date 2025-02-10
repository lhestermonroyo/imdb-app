import fastify from 'fastify';
import cors from '@fastify/cors';

import movieRoutes from './src/components/movies/movies.route';
import env from './src/config/env';

const serverPort = env.serverPort;

const app = fastify({
  logger: true,
});
app.register(cors);
app.register(movieRoutes, { prefix: 'api/movies' });

app.listen({ port: serverPort || 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
