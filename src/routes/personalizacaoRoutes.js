
const express = require('express');
const router = express.Router();
const personalizacaoController = require('../controllers/personalizacaoController');


router.get('/', personalizacaoController.getAll);
router.get('/:id', personalizacaoController.getById);
router.post('/', personalizacaoController.create);
router.put('/:id', personalizacaoController.update);
router.delete('/:id', personalizacaoController.remove);

module.exports = router;
