
const express =  require('express');
const router = express.Router();
const funcionariosController = require('../controllers/funcionariosControllers');

router.use('/', funcionariosController);

module.exports = router;