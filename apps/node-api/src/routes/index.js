import { healthRoutes } from './health.js';
import { techStackRoutes } from './tech-stack.js';
import { userRoutes } from './users.js';

export async function registerRoutes(server) {
  await server.register(healthRoutes, { prefix: '/health' });
  await server.register(techStackRoutes, { prefix: '/api/tech-stack' });
  await server.register(userRoutes, { prefix: '/api/users' });
}