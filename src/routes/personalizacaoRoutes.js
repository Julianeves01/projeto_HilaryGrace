
const express = require('express');
const router = express.Router();
const personalizacaoController = require('../controllers/personalizacaoController');

router.get('/', personalizacaoController.getAll);
router.post('/', personalizacaoController.create);
router.delete('/:id', personalizacaoController.remove);

module.exports = router;
