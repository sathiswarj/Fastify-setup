"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const startServer = async () => {
    try {
        await app_1.default.listen({ port: 3000, host: '0.0.0.0' });
        console.log(`Server running at http://localhost:3000`);
    }
    catch (err) {
        app_1.default.log.error(err);
        process.exit(1);
    }
};
startServer();
