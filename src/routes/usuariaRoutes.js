const express = require('express');
const router = express.Router();
const usuariaController = require('../controllers/usuariaController');

// CREATE - Criar usuária
router.post("/", usuariaController.criarUsuaria);

// READ - Listar todas as usuárias
router.get("/", usuariaController.listarUsuarias);

// READ - Buscar usuária por ID
router.get("/:id", usuariaController.buscarUsuariaPorId);

// UPDATE - Atualizar usuária
router.put("/:id", usuariaController.atualizarUsuaria);

// DELETE - Deletar usuária
router.delete("/:id", usuariaController.deletarUsuaria);

module.exports = router;
