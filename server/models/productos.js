const mongoose = require('mongoose');
const {Schema} = mongoose;

const productosEsquema = new Schema({
    nombre: {type: String, required:true},
    stock: {type: Number, required:true},
    precio: {type: Number, required:true},
    categoria: {type: String, required:true},


})
module.exports = mongoose.model('Productos', productosEsquema)