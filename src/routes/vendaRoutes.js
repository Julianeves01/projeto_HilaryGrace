const express = require("express");
const router = express.Router();
const vendaController = require("../controllers/vendaController");

// CREATE - Registrar venda
router.post("/", vendaController.registrarVenda);

// READ - Listar todas as vendas
router.get("/", vendaController.listarVendas);

// READ - Buscar venda por ID
router.get("/:id", vendaController.buscarVendaPorId);

// UPDATE - Atualizar venda
router.put("/:id", vendaController.atualizarVenda);

// DELETE - Cancelar/deletar venda
router.delete("/:id", vendaController.cancelarVenda);

module.exports = router;