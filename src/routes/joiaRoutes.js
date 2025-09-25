const express = require('express');
const router = express.Router();
const joiaController = require('../controllers/joiaController');


router.post("/", joiaController.criarJoia);
router.get("/", joiaController.listarJoias);
router.get("/:id", joiaController.detalharJoia);

module.exports = router;
