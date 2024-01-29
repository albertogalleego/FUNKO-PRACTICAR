const mongoose = require('mongoose');
const {Schema} = mongoose;

const categoriasEsquema = new Schema({
    nombre: {type: String, required:true},
})
module.exports = mongoose.model('Categorias', categoriasEsquema)    