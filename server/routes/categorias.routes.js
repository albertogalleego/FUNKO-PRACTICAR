const express= require('express');
const router = express.Router();

const catControl= require('../controllers/categorias.controller')

router.get ('/',catControl.mostrarCategorias);

router.post ('/',catControl.crearCategoria);

router.get ('/:id',catControl.mostrarCategoria);

router.put ('/:id',catControl.editarCategoria);

router.delete ('/:id',catControl.borrarCategoria);


module.exports =router