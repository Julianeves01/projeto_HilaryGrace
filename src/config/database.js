const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'ds564',
    database: process.env.DB_NAME || 'joalheria2',
    port: process.env.DB_PORT || 7777
});

// Testar conexão
pool.on('connect', () => {
    console.log('✅ Conectado ao banco de dados PostgreSQL');
});

pool.on('error', (err) => {
    console.error('❌ Erro na conexão com o banco:', err.message);
});

module.exports = pool;
