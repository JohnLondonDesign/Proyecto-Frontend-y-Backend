/**
 creamos un módulo por eso utilizamos express
*/

const express = require('express');
const router = express.Router();
const inventarioF = require('../controllers/inventario.controller');


router.get('/', inventarioF.getInventario); // Rutas más limpias (obtener Inventarios)
router.post('/', inventarioF.createInventario);//guardar
router.get('/:id', inventarioF.getUnicoInventario);// obtiene un único Inventario
router.put('/:id', inventarioF.editarInventario); //Actualizar datos (uno a la vez)
router.delete('/:id', inventarioF.eliminarInventario); // Eliminar datos

module.exports = router;