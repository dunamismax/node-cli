import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import { registerRoutes } from './routes/index.js';
import { HTTP_STATUS, createErrorResponse } from '@node-cli/shared-utils';

export function buildServer() {
  const server = Fastify({
    logger: {
      level: 'info',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname'
        }
      }
    }
  });

  server.register(cors, {
    origin: true,
    credentials: true
  });

  server.register(helmet, {
    contentSecurityPolicy: false
  });

  server.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute'
  });

  server.setErrorHandler((error, request, reply) => {
    server.log.error(error);
    
    const statusCode = error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const message = error.message || 'Internal Server Error';
    
    reply
      .status(statusCode)
      .send(createErrorResponse(message));
  });

  server.setNotFoundHandler((request, reply) => {
    reply
      .status(HTTP_STATUS.NOT_FOUND)
      .send(createErrorResponse('Route not found'));
  });

  registerRoutes(server);

  return server;
}