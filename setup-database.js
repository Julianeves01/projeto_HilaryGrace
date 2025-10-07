const { Pool } = require('pg');
const fs = require('fs');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

async function setupDatabase() {
  try {
    console.log('Conectando ao banco de dados...');
    
    // Ler o arquivo SQL
    const sql = fs.readFileSync('./src/database/schema.sql', 'utf8');
    
    // Dividir o SQL em comandos individuais (remove o CREATE DATABASE)
    const commands = sql
      .split(';')
      .map(cmd => cmd.trim())
      .filter(cmd => cmd.length > 0 && !cmd.toUpperCase().includes('CREATE DATABASE'));
    
    console.log(`Executando ${commands.length} comandos SQL...`);
    
    for (let i = 0; i < commands.length; i++) {
      try {
        await pool.query(commands[i]);
        console.log(`✓ Comando ${i + 1}/${commands.length} executado com sucesso`);
      } catch (err) {
        // Ignorar erros de "já existe"
        if (err.message.includes('already exists') || err.message.includes('já existe')) {
          console.log(`⚠ Comando ${i + 1}/${commands.length}: ${err.message}`);
        } else {
          console.error(`✗ Erro no comando ${i + 1}:`, err.message);
        }
      }
    }
    
    console.log('\n✅ Banco de dados configurado com sucesso!');
    
    // Verificar as tabelas criadas
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    console.log('\nTabelas criadas:');
    result.rows.forEach(row => console.log(`  - ${row.table_name}`));
    
  } catch (err) {
    console.error('❌ Erro ao configurar banco de dados:', err);
  } finally {
    await pool.end();
  }
}

setupDatabase();
