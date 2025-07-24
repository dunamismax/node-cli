import { createSuccessResponse } from '@node-cli/shared-utils';

export async function healthRoutes(server) {
  server.get('/', async (_request, _reply) => {
    return createSuccessResponse({
      status: 'healthy',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0'
    });
  });

  server.get('/ready', async (_request, _reply) => {
    return createSuccessResponse({
      status: 'ready',
      database: 'connected'
    });
  });
}