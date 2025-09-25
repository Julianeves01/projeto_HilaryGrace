const pool = require('../config/database');

exports.criarUsuaria = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const [result] = await pool.query(
            "INSERT INTO usuarias (nome, email, senha) VALUES ($1, $2, $3) RETURNING *",
            [nome, email, senha]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};