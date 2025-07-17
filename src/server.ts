import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await app.listen({ port: Number(PORT), host: '0.0.0.0' });
    console.log(` Server running at http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
