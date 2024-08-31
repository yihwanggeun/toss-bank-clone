const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.get('/:id', loanController.getLoanById);
router.post('/', loanController.createLoan);
//router.put('/:id', productController.updateProduct);
router.delete('/:id', loanController.getLoanById);

module.exports = router;