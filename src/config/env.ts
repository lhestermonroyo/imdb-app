import dotenv from 'dotenv';

dotenv.config();

const env = {
  serverPort: Number(process.env.SERVER_PORT),
};

export default env;
