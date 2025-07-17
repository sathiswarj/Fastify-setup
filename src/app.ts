import Fastify from 'fastify';
import cors from '@fastify/cors';
import exampleRoute from './routes/example.route';

const app = Fastify({ logger: true });

app.register(cors);
app.register(exampleRoute, { prefix: '/api' });

export default app;
