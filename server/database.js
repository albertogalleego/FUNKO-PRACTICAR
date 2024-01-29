const mongoose= require('mongoose'); 
const URI = 'mongodb://127.0.0.1:27017/BaseDatos'

mongoose.connect(URI)
    .then(db=>console.log('bd funsiona :D'))
    .catch(err=>console.error(err))

module.exports = mongoose;