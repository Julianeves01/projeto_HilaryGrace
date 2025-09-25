const express = require('express');
const router = express.Router();
const joiaController = require('../controllers/joiaController');

// CREATE - Criar joia
router.post("/", joiaController.criarJoia);

// READ - Listar todas as joias
router.get("/", joiaController.listarJoias);

// READ - Buscar joia por ID
router.get("/:id", joiaController.detalharJoia);

// UPDATE - Atualizar joia
router.put("/:id", joiaController.atualizarJoia);

// DELETE - Deletar joia
router.delete("/:id", joiaController.deletarJoia);

module.exports = router;
