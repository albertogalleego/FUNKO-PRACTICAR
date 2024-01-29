const express = require('express');
const router = express.Router();
const usuControl = require('../controllers/usuarios.controller');

router.get('/', usuControl.mostrarUsuarios);
router.post('/', usuControl.crearUsuario);
//router.get('/:id', usuControl.mostrarUsuario);
router.put('/:id', usuControl.editarUsuario);
router.delete('/:id', usuControl.borrarUsuario);

// Agrega la ruta para iniciar sesión
router.post('/login', usuControl.iniciarSesion);

module.exports = router;
