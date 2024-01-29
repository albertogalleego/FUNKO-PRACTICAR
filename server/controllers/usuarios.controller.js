const usuarioController ={};
const usuariosModels=require('../models/usuarios')
const jwt = require('jsonwebtoken');
const Usuario = usuariosModels; 
const secretKey = 'xx12';

/*
usuarioController.mostrarUsuarioPorNombre = async (req, res) => {
  const { nombre } = req.params;

  try {
    const usuarioEncontrado = await Usuario.findOne({ nombre });

    if (!usuarioEncontrado) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.json(usuarioEncontrado);
  } catch (error) {
    console.error('Error al buscar el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

*/
usuarioController.mostrarUsuarios = async (req,res)=>{
    const leerUsuarios= await usuariosModels.find();

    res.json(leerUsuarios)
}

usuarioController.crearUsuario = async(req,res) =>{
   const nuevouser= new usuariosModels(req.body);
   await nuevouser.save();
   res.json('usuario metido');
};



usuarioController.editarUsuario = async(req,res)=>{
const {id}=req.params;
const usuarioeditar = {
    nombre: req.body.nombre,
    contrasena: req.body.contrasena,
    edad: req.body.edad

};
await usuariosModels.findByIdAndUpdate(id, {$set: usuarioeditar}, {new: true});
res.json('USUARIO ACTUALIZADO');
}


usuarioController.borrarUsuario = async(req,res)=>{ 
    const buscarusuario = await usuariosModels.findById(req.params.id);
    await usuariosModels.findByIdAndDelete(buscarusuario);
    res.json('USUARIO eliminado');
}


usuarioController.iniciarSesion = async (req, res) => {
  const { nombre, contrasena } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ nombre });

    if (!usuarioEncontrado) {
      res.status(401).json({ message: 'Credenciales inválidas' });
      return;
    }

    const contrasenaValida = usuarioEncontrado.contrasena === contrasena;

    if (!contrasenaValida) {
      res.status(401).json({ message: 'Credenciales inválidas' });
      return;
    }

    const token = jwt.sign({ nombre }, secretKey);
    res.json({ token });
  } catch (error) {
    console.error('Error al autenticar:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


module.exports = usuarioController;
