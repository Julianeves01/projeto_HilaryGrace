const { Pool } = require('pg');
require('dotenv').config();

console.log('🔧 Configurando conexão com banco de dados...');
console.log('📊 Configurações:', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Testar conexão
pool.on('connect', () => {
    console.log('✅ Conectado ao banco de dados PostgreSQL');
});

pool.on('error', (err) => {
    console.error('❌ Erro na conexão com o banco:', err.message);
});

module.exports = pool;
