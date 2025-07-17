"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const example_route_1 = __importDefault(require("./routes/example.route"));
const app = (0, fastify_1.default)({ logger: true });
app.register(cors_1.default);
app.register(example_route_1.default, { prefix: '/api' });
exports.default = app;
