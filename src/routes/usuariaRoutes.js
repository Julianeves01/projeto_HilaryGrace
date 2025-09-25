const express = require('express');
const router = express.Router();
const usuariaController = require('../controllers/personalizacaoController');


router.post("/", usuariaController.criarUsuaria);
router.get("/", usuariaController.listarUsuarias);

module.exports = router;
