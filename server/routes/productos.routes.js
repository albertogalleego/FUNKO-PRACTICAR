const express= require('express');
const router = express.Router();

const prodControl= require('../controllers/productos.controller')

router.get ('/',prodControl.mostrarProductos);

router.post ('/',prodControl.crearProducto);

router.get ('/:id',prodControl.mostrarProducto);

router.put ('/:id',prodControl.editarProducto);

router.delete ('/:id',prodControl.borrarProducto);


module.exports =router