const categoriaController ={};
const categoriasModels=require('../models/categorias')


categoriaController.mostrarCategorias = async (req,res)=>{
    const leercategorias= await categoriasModels.find();
    res.json(leercategorias)
}

categoriaController.crearCategoria = async(req,res) =>{
   const nuevouser= new categoriasModels(req.body);
   await nuevouser.save();
   res.json('categoria metido');
};
categoriaController.mostrarCategoria = async(req,res)=>{
 const buscarcategoria = await categoriasModels.findById(req.params.id);
 res.json(buscarcategoria);

}

categoriaController.editarCategoria = async(req,res)=>{
const {id}=req.params;
const categoriaeditar = {
    nombre: req.body.nombre,
    contrasena: req.body.contrasena,
    edad: req.body.edad

};
await categoriasModels.findByIdAndUpdate(id, {$set: categoriaeditar}, {new: true});
res.json('categoria ACTUALIZADO');
}


categoriaController.borrarCategoria = async(req,res)=>{ 
    const buscarcategoria = await categoriasModels.findById(req.params.id);
    await categoriasModels.findByIdAndDelete(buscarcategoria);
    res.json('categoria eliminado');
}

module.exports = categoriaController;
