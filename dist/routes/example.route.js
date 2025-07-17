"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function exampleRoute(app) {
    app.get('/hello', async (request, reply) => {
        return { message: 'Hello from Fastify with TypeScript!' };
    });
}
exports.default = exampleRoute;
