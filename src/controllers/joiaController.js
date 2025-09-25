const pool = require("../config/database");

exports.criarJoia = async (req, res) => {
    try {
        const { nome, descricao, preco, usuaria_id } = req.body;
        const result = await pool.query(
            "INSERT INTO joias (nome, descricao, preco, usuaria_id) VALUES($1, $2, $3, $4) RETURNING *",
            [nome, descricao, preco, usuaria_id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listarJoias = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT j.*, u.nome AS vendedora
            FROM joias j
            JOIN usuarias u ON j.usuaria_id = u.id
            ORDER BY j.created_at DESC
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.detalharJoia = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT j.*, u.nome AS vendedora, u.email
            FROM joias j
            JOIN usuarias u ON j.usuaria_id = u.id
            WHERE j.id = $1`,
            [id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};