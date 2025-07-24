import { TECH_STACK, createSuccessResponse } from '@node-cli/shared-utils';

export async function techStackRoutes(server) {
  server.get('/', async (_request, _reply) => {
    return createSuccessResponse({
      description: 'Node.js Backend & CLI Technology Stack',
      philosophy: 'Modularity, performance, and developer efficiency',
      stack: Object.values(TECH_STACK)
    });
  });

  server.get('/categories', async (_request, _reply) => {
    const categories = [...new Set(Object.values(TECH_STACK).map(item => item.category))];
    return createSuccessResponse(categories);
  });

  server.get('/category/:category', async (request, reply) => {
    const { category } = request.params;
    
    const items = Object.values(TECH_STACK).filter(item => 
      item.category.toLowerCase() === category.toLowerCase()
    );

    if (items.length === 0) {
      reply.status(404);
      return createSuccessResponse(null);
    }

    return createSuccessResponse(items);
  });
}