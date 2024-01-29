const mongoose = require('mongoose');
const {Schema} = mongoose;

const usuarioEsquema = new mongoose.Schema({
    nombre: {type: String, required:true},
    contrasena: {type: String, required:true},
})
module.exports = mongoose.model('Usuario', usuarioEsquema);