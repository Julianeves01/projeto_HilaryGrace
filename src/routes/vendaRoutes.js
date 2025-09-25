const express = require("express");
const router = express.Router();
const vendaController = require("../controllers/vendaController");

router.post("/", vendaController.registrarVenda);
router.get("/", vendaController.listarVendas);

module.exports = router;