
const Joia = require('../models/Joia');

exports.getAll = async (req, res) => {
    try {
        const joias = await Joia.findAll();
        res.json(joias);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar joias' });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const joia = await Joia.findById(id);
        if (!joia) return res.status(404).json({ error: 'Joia não encontrada' });
        res.json(joia);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar joia' });
    }
};

exports.create = async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;
        if (!nome || preco == null) return res.status(400).json({ error: 'nome e preco são obrigatórios' });

        const joia = await Joia.create(nome, descricao, preco);
        res.status(201).json(joia);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar joia' });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao, preco } = req.body;
        const joia = await Joia.update(id, nome, descricao, preco);
        if (!joia) return res.status(404).json({ error: 'Joia não encontrada' });
        res.json(joia);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar joia' });
    }
};

exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        const joia = await Joia.delete(id);
        if (!joia) return res.status(404).json({ error: 'Joia não encontrada' });
        res.json({ message: 'Joia removida com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao remover joia' });
    }
};
