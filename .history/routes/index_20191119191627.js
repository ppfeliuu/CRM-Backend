const express = require('express');

const router = express.Router();

const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');
const usuariosController = require('../controllers/usuariosController');

// middleware para proteger rutas
const auth = require('../middleware/auth');

module.exports = function() {

   // Clientes
   // Añade nuevos clientes por POST
   router.post('/clientes', clienteController.nuevoCliente);

   // Obtener cliente
   router.get('/clientes', clienteController.obtenerClientes);

   //Muestra un cliente
   router.get('/clientes/:idCliente', clienteController.obtenerCliente);

   //Actualizar cliente
   router.put('/clientes/:idCliente', clienteController.actualizarCliente);

   //Eliminar cliente
   router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

   // Productos
   // nuevos productos
   router.post('/productos', productosController.subirArchivo, productosController.nuevoProducto);

   //Muestra los productos
   router.get('/productos', productosController.mostrarProductos);

   //Muestra producto por ID
   router.get('/productos/:idProducto', productosController.mostrarProducto);

   //Update producto
   router.put('/productos/:idProducto', productosController.subirArchivo, productosController.actualizarProducto);

   //Eliminar producto
   router.delete('/productos/:idProducto', productosController.eliminarProducto);

   //Busqueda de productos
   router.post('/productos/busqueda/:query', productosController.buscarProducto);

   /* PEDIDOS */
   //Agregar nuevos pedidos
   router.post('/pedidos/nuevo/:idUsuario', pedidosController.nuevoPedido);

   //Mostrar pedidos
   router.get('/pedidos', pedidosController.mostrarPedidos);

   //Pedido por ID
   // router.get('/pedidos/:id', pedidosController.mostrarPedido);
   router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

   //Actualizar pedido
   router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

   //Eliminar
   router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);


   //Usuarios
   router.post('/crear-cuenta', usuariosController.registrarUsuario);
   router.post('/iniciar-sesion', usuariosController.autenticarUsuario);
   
   return router;
}