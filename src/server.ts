import dotenv from 'dotenv';
dotenv.config();
import connectDB  from './config/db';
import app from './app';  //From app.ts, where you defined all your routes, plugins, and configuration.

//For clean project structure: app handles setup, server handles starting the server.


const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    await app.listen({ port: Number(PORT), host: '0.0.0.0' });
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
// process: Refers to the running Node.js process.

// .exit(): Immediately stops the Node.js application.

// (1): The exit code. By convention:

// 0 means success (no error).

// 1 (or any non-zero number) means there was an error or failure.
};

startServer();
