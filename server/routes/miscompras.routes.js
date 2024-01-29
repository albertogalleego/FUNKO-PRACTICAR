const express = require('express');
const router = express.Router();
const comprasControl = require('../controllers/miscompras.controller');

router.get('/', comprasControl.mostrarmisCompras);
router.post('/', comprasControl.crearmisCompras);



module.exports = router;