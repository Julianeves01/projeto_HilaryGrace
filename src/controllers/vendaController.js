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