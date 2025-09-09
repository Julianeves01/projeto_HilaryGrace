const pool = require('../config/database');

class Joia {
    static async findAll() {
        try {
            console.log('🔍 Tentando buscar todas as joias...');
            const result = await pool.query('SELECT * FROM joias ORDER BY id');
            console.log('✅ Joias encontradas:', result.rows.length);
            return result.rows;
        } catch (error) {
            console.error('❌ Erro ao buscar joias:', error.message);
            throw error;
        }
    }

    static async findById(id) {
        try {
            const result = await pool.query('SELECT * FROM joias WHERE id = $1', [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async create(nome, descricao, preco) {
        try {
            const result = await pool.query(
                'INSERT INTO joias (nome, descricao, preco) VALUES ($1, $2, $3) RETURNING *',
                [nome, descricao, preco]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async update(id, nome, descricao, preco) {
        try {
            const result = await pool.query(
                'UPDATE joias SET nome = $1, descricao = $2, preco = $3 WHERE id = $4 RETURNING *',
                [nome, descricao, preco, id]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await pool.query('DELETE FROM joias WHERE id = $1 RETURNING *', [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Joia;
