import Fastify from 'fastify';
import cors from '@fastify/cors'; // Imports CORS handling plugin to allow or block cross-origin requests.
import userRoute from './entry-points/http/user/user';

const app = Fastify({ logger: true }); //Creates a Fastify server instance called app.
// enables Fastify's built-in logging, so requests and errors show up in your terminal while the server runs.

app.register(cors); //Adds CORS (Cross-Origin Resource Sharing) middleware.
app.register(userRoute, { prefix: '/api' }); //Adds the prefix /api automatically to all routes inside exampleRoute.

export default app;


