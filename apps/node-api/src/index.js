import 'dotenv/config';
import { buildServer } from './server.js';
import { connectToDatabase } from './database.js';
import { formatLogMessage } from '@node-cli/shared-utils';

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

async function start() {
  try {
    const server = buildServer();
    
    await connectToDatabase();
    console.log(JSON.stringify(formatLogMessage('info', 'Connected to MongoDB')));
    
    await server.listen({ port: PORT, host: HOST });
    console.log(JSON.stringify(formatLogMessage('info', `Server listening on http://${HOST}:${PORT}`)));
    
    const shutdown = async () => {
      console.log(JSON.stringify(formatLogMessage('info', 'Shutting down server...')));
      await server.close();
      process.exit(0);
    };
    
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
    
  } catch (err) {
    console.error(JSON.stringify(formatLogMessage('error', 'Error starting server', { error: err })));
    process.exit(1);
  }
}

start();