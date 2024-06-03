/**
* Se coloca el controlador como un objeto y luego se exporta como
* se requiere primero el modelo inventario
*/

const Inventario = require('../models/inventario');
const inventarioF = {};

/**
* DEFINO LOS MÉTODOS */

//Obtener todos los Productos
inventarioF.getInventario = async (req, res) => {
const inventarios = await Inventario.find();
res.json(inventarios);

}

// Crear Inventario
inventarioF.createInventario = async (req, res) => {
const inventario = new Inventario(req.body);
await inventario.save();
res.json({'status': 'Inventario guardado'});

}

//Conseguir un único Inventario 
inventarioF.getUnicoInventario = async (req, res) => {
const inventarioUnico = await Inventario.findById(req.params.id);
res.json(inventarioUnico);

}

//Actualizar Inventario
inventarioF.editarInventario = async (req, res) => {
const { id } = req.params;
const inventarioEdit = {
    codigo: req.body.codigo,
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    price: req.body.price,
    quantity: req.body.quantity

};

await Inventario.findByIdAndUpdate(id, {$set: inventarioEdit}, {new: true});
res.json({status: 'Inventario Actualizado'});

}

// Eliminar Inventario
inventarioF.eliminarInventario = async (req, res) => {
await Inventario.findByIdAndDelete(req.params.id);
res.json({status: 'Inventario Eliminado'});

}

//exporto el módulo
module.exports = inventarioF;



