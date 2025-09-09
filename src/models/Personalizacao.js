const pool = require('../config/database');

class Personalizacao {
    static async findAll() {
        try {
            const result = await pool.query(`
                SELECT p.*, j.nome as joia_nome 
                FROM personalizacoes p 
                JOIN joias j ON p.joia_id = j.id 
                ORDER BY p.id
            `);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    static async findById(id) {
        try {
            const result = await pool.query(`
                SELECT p.*, j.nome as joia_nome 
                FROM personalizacoes p 
                JOIN joias j ON p.joia_id = j.id 
                WHERE p.id = $1
            `, [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async findByJoiaId(joiaId) {
        try {
            const result = await pool.query(
                'SELECT * FROM personalizacoes WHERE joia_id = $1',
                [joiaId]
            );
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    static async create(joiaId, metal, pedra, formato) {
        try {
            const result = await pool.query(
                'INSERT INTO personalizacoes (joia_id, metal, pedra, formato) VALUES ($1, $2, $3, $4) RETURNING *',
                [joiaId, metal, pedra, formato]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async update(id, joiaId, metal, pedra, formato) {
        try {
            const result = await pool.query(
                'UPDATE personalizacoes SET joia_id = $1, metal = $2, pedra = $3, formato = $4 WHERE id = $5 RETURNING *',
                [joiaId, metal, pedra, formato, id]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await pool.query('DELETE FROM personalizacoes WHERE id = $1 RETURNING *', [id]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Personalizacao;
