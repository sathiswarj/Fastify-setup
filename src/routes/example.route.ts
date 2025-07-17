import { FastifyInstance } from 'fastify';

async function exampleRoute(app: FastifyInstance) {
  app.get('/hello', async (request, reply) => {
    return { message: 'Hello from Fastify with TypeScript!' };
  });
}

export default exampleRoute;
