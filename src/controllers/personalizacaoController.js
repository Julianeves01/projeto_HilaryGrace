
const pool = require('../models/db');

exports.getAll = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM personalizacoes ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar personalizações' });
    }
};

exports.create = async (req, res) => {
    try {
        const { joia_id, metal, pedra, formato } = req.body;
        if (!joia_id) return res.status(400).json({ error: 'joia_id é obrigatório' });

        const result = await pool.query(
            'INSERT INTO personalizacoes (joia_id, metal, pedra, formato) VALUES ($1, $2, $3, $4) RETURNING *',
            [joia_id, metal, pedra, formato]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar personalização' });
    }
};

exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM personalizacoes WHERE id=$1', [id]);
        res.json({ message: 'Personalização removida com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao remover personalização' });
    }
};
