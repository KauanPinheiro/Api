

const express = require('express');
const router =  express.Router();
const produtosController =  require ('../controllers/produtosControllers')

router.use('/', produtosController);

module.exports = router;