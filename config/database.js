const postgres = require('postgres');

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

let sql = null;

if (connectionString) {
  sql = postgres(connectionString, {
    ssl: { rejectUnauthorized: false },
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10
  });
}

async function testConnection() {
  if (!sql) {
    console.warn('DATABASE_URL não definida. Pulando conexão com PostgreSQL.');
    return null;
  }

  try {
    const result = await sql`SELECT NOW() AS now`;
    console.log('Conexão com PostgreSQL OK:', result[0].now);
    return result[0];
  } catch (error) {
    console.error('Erro ao conectar ao PostgreSQL:', error.message);
    throw error;
  }
}

module.exports = {
  sql,
  testConnection
};
