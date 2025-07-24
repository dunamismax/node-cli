import { MongoClient } from 'mongodb';

let client;
let db;

const config = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
  dbName: process.env.DB_NAME || 'node_cli_db',
  options: {
    maxPoolSize: 10,
    minPoolSize: 2,
    maxIdleTimeMS: 30000
  }
};

export async function connectToDatabase() {
  if (client && client.topology && client.topology.isConnected()) {
    return;
  }

  client = new MongoClient(config.uri, config.options);
  await client.connect();
  db = client.db(config.dbName);
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not connected. Call connectToDatabase() first.');
  }
  return db;
}

export async function closeDatabase() {
  if (client) {
    await client.close();
  }
}