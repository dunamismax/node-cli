export const TECH_STACK = {
  NODE_JS: {
    name: 'Node.js',
    description: 'JavaScript runtime environment for server-side development',
    url: 'https://nodejs.org/en/docs',
    category: 'runtime'
  },
  FASTIFY: {
    name: 'Fastify',
    description: 'High-performance web framework for Node.js',
    url: 'https://www.fastify.io/docs/latest/',
    category: 'web-framework'
  },
  YARGS: {
    name: 'Yargs',
    description: 'Interactive command-line argument parser',
    url: 'https://yargs.js.org/docs/',
    category: 'cli'
  },
  ENQUIRER: {
    name: 'Enquirer',
    description: 'Stylish, intuitive CLI prompts',
    url: 'https://github.com/enquirer/enquirer',
    category: 'cli'
  },
  MONGODB: {
    name: 'MongoDB Native Driver',
    description: 'Official MongoDB driver for Node.js',
    url: 'https://www.mongodb.com/docs/drivers/node/current/',
    category: 'database'
  },
  VINEJS: {
    name: 'VineJS',
    description: 'Fast and lightweight validation library',
    url: 'https://vinejs.dev/docs/introduction',
    category: 'validation'
  }
};

export const DEFAULT_PORTS = {
  API: 3000,
  DEVELOPMENT: 3001
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

export const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];