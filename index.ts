import fastify from 'fastify';
import cors from '@fastify/cors';

import env from './src/config/env';

const serverPort: number = env.serverPort || 3001;

const app = fastify({
  logger: true,
});

app.listen({ port: serverPort }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
