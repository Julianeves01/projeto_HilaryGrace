const pool = require("../config/database");

exports.registrarVenda = async (req, res) => {
    try {
        const { joia_id, comprador_nome, comprador_email } = req.body;
        const venda = await pool.query(
            "INSERT INTO vendas (joia_id, comprador_nome, comprador_email) VALUES ($1, $2, $3) RETURNING *",
            [joia_id, comprador_nome, comprador_email]
        );
        await pool.query("UPDATE joias SET status = 'vendido' WHERE id = $1", [joia_id]);
        res.json(venda.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listarVendas = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT v.id, j.nome AS joia, v.comprador_nome, v.comprador_email,
            v.data_venda, u.nome AS vendedora
            FROM vendas v
            JOIN joias j ON v.joia_id = j.id
            JOIN usuarias u ON j.usuaria_id = u.id
            ORDER BY v.data_venda DESC
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.buscarVendaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`
            SELECT v.*, j.nome AS joia, j.preco, u.nome AS vendedora, u.email AS vendedora_email
            FROM vendas v
            JOIN joias j ON v.joia_id = j.id
            JOIN usuarias u ON j.usuaria_id = u.id
            WHERE v.id = $1
        `, [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Venda não encontrada' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarVenda = async (req, res) => {
    try {
        const { id } = req.params;
        const { comprador_nome, comprador_email } = req.body;
        
        const result = await pool.query(
            "UPDATE vendas SET comprador_nome = $1, comprador_email = $2 WHERE id = $3 RETURNING *",
            [comprador_nome, comprador_email, id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Venda não encontrada' });
        }
        
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.cancelarVenda = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Buscar a venda para recuperar o joia_id
        const vendaResult = await pool.query("SELECT * FROM vendas WHERE id = $1", [id]);
        
        if (vendaResult.rows.length === 0) {
            return res.status(404).json({ error: 'Venda não encontrada' });
        }
        
        const joia_id = vendaResult.rows[0].joia_id;
        
        // Deletar a venda
        const deleteResult = await pool.query("DELETE FROM vendas WHERE id = $1 RETURNING *", [id]);
        
        // Atualizar status da joia para disponível
        await pool.query("UPDATE joias SET status = 'disponivel' WHERE id = $1", [joia_id]);
        
        res.json({ 
            message: 'Venda cancelada com sucesso', 
            venda: deleteResult.rows[0] 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};