const express = require('express');
const fibonacciController = require('../controllers/fibonacciController');
const router = express.Router();

router.route('/:n')
.get(fibonacciController.getFibonacci);

module.exports = router;