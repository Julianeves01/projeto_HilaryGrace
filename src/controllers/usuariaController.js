const pool = require('../config/database');

exports.criarUsuaria = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const result = await pool.query(
            "INSERT INTO usuarias (nome, email, senha) VALUES ($1, $2, $3) RETURNING *",
            [nome, email, senha]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

exports.listarUsuarias = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM usuarias");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

exports.buscarUsuariaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM usuarias WHERE id = $1", [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuária não encontrada' });
        }
        
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

exports.atualizarUsuaria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        
        const result = await pool.query(
            "UPDATE usuarias SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *",
            [nome, email, senha, id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuária não encontrada' });
        }
        
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

exports.deletarUsuaria = async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await pool.query("DELETE FROM usuarias WHERE id = $1 RETURNING *", [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Usuária não encontrada' });
        }
        
        res.json({ message: 'Usuária deletada com sucesso', usuaria: result.rows[0] });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};