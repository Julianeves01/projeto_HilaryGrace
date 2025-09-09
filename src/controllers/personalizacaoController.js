
const Personalizacao = require('../models/Personalizacao');

exports.getAll = async (req, res) => {
    try {
        const personalizacoes = await Personalizacao.findAll();
        res.json(personalizacoes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar personalizações' });
    }
};

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        const personalizacao = await Personalizacao.findById(id);
        if (!personalizacao) return res.status(404).json({ error: 'Personalização não encontrada' });
        res.json(personalizacao);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar personalização' });
    }
};

exports.create = async (req, res) => {
    try {
        const { joia_id, metal, pedra, formato } = req.body;
        if (!joia_id) return res.status(400).json({ error: 'joia_id é obrigatório' });

        const personalizacao = await Personalizacao.create(joia_id, metal, pedra, formato);
        res.status(201).json(personalizacao);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar personalização' });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { joia_id, metal, pedra, formato } = req.body;
        const personalizacao = await Personalizacao.update(id, joia_id, metal, pedra, formato);
        if (!personalizacao) return res.status(404).json({ error: 'Personalização não encontrada' });
        res.json(personalizacao);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar personalização' });
    }
};

exports.remove = async (req, res) => {
    try {
        const { id } = req.params;
        const personalizacao = await Personalizacao.delete(id);
        if (!personalizacao) return res.status(404).json({ error: 'Personalização não encontrada' });
        res.json({ message: 'Personalização removida com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao remover personalização' });
    }
};
