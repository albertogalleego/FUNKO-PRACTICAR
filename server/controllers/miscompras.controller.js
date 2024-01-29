const comprasController ={};
const comprasModels=require('../models/miscompras')


comprasController.mostrarmisCompras = async (req,res)=>{
    const leermiscompras= await comprasModels.find();
    res.json(leermiscompras)
}

comprasController.crearmisCompras  = async(req,res) =>{
   const nuevasCompras= new comprasModels(req.body);
   await nuevasCompras.save();
   res.json(' metido');
};





module.exports = comprasController;
