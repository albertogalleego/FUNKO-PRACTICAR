const productoController ={};
const productosModels=require('../models/productos')


productoController.mostrarProductos = async (req,res)=>{
    const leerproductos= await productosModels.find();
    res.json(leerproductos)
}


productoController.crearProducto = async(req,res) =>{
    
   const nuevopr= new productosModels(req.body);
   await nuevopr.save();
   res.json('producto metido');
};


productoController.mostrarProducto = async(req,res)=>{
 const buscarproducto = await productosModels.findById(req.params.id);
 res.json(buscarproducto);

}

productoController.editarProducto = async(req,res)=>{
const {id}=req.params;
const productoeditar = {
    nombre: req.body.nombre,
    stock: req.body.stock,
    precio: req.body.precio,
    categoria: req.body.categoria,

    


};
await productosModels.findByIdAndUpdate(id, {$set: productoeditar}, {new: true});
res.json('producto ACTUALIZADO');
}


productoController.borrarProducto = async(req,res)=>{ 
    const buscarproducto = await productosModels.findById(req.params.id);
    await productosModels.findByIdAndDelete(buscarproducto);
    res.json('producto eliminado');
}

module.exports = productoController;
