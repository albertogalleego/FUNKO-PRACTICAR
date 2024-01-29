const mongoose = require('mongoose');
const {Schema} = mongoose;

const miscomprasEsquema = new Schema({
idusuario: {type: String, required:true},
totalcompra: {type: Number, required:true},
productoscomprados:{type:String,required:true}
})
module.exports = mongoose.model('Mis compras', miscomprasEsquema)    