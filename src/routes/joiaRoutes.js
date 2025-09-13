const express = require('express');
const router = express.Router();
const joiaController = require('../controllers/joiaController');


router.get('/', joiaController.getAll);
router.get('/:id', joiaController.getById);
router.post('/', joiaController.create);
router.put('/:id', joiaController.update);
router.delete('/:id', joiaController.remove);

module.exports = router;
