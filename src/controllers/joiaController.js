
const pool = require('../models/db');

exports.getAll = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM joias ORDER BY id');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar joias' });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM joias WHERE id = $1', [id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Joia não encontrada' });
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar joia' });
    }
};

exports.create = async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;
        if (!nome || preco == null) return res.status(400).json({ error: 'nome e preco são obrigatórios' });

        const result = await pool.query(
            'INSERT INTO joias (nome, descricao, preco) VALUES ($1, $2, $3) RETURNING *',
            [nome, descricao, preco]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar joia' });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao, preco } = req.body;
        const result = await pool.query(
            'UPDATE joias SET nome=$1, descricao=$2, preco=$3 WHERE id=$4 RETURNING *',
            [nome, descricao, preco, id]
        );
        if (result.rows.length === 0) return res.status(404).json({ error: 'Joia não encontrada' });
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar joia' });
    }
};

exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM joias WHERE id=$1', [id]);
        res.json({ message: 'Joia removida com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao remover joia' });
    }
};
