import dotenv from 'dotenv';

dotenv.config();

const env = {
  serverPort: Number(process.env.SERVER_PORT),
  imdbApiKey: process.env.IMDB_API_KEY,
};

export default env;
