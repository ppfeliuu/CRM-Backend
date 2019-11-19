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
   router.post('/clientes',auth, clienteController.nuevoCliente);

   // Obtener cliente
   router.get('/clientes',auth, clienteController.obtenerClientes);

   //Muestra un cliente
   router.get('/clientes/:idCliente', auth, clienteController.obtenerCliente);

   //Actualizar cliente
   router.put('/clientes/:idCliente',auth, clienteController.actualizarCliente);

   //Eliminar cliente
   router.delete('/clientes/:idCliente',auth, clienteController.eliminarCliente);

   // Productos
   // nuevos productos
   router.post('/productos',auth, productosController.subirArchivo, productosController.nuevoProducto);

   //Muestra los productos
   router.get('/productos',auth, productosController.mostrarProductos);

   //Muestra producto por ID
   router.get('/productos/:idProducto',auth, productosController.mostrarProducto);

   //Update producto
   router.put('/productos/:idProducto',auth, productosController.subirArchivo, productosController.actualizarProducto);

   //Eliminar producto
   router.delete('/productos/:idProducto',auth, productosController.eliminarProducto);

   //Busqueda de productos
   router.post('/productos/busqueda/:query',auth, productosController.buscarProducto);

   /* PEDIDOS */
   //Agregar nuevos pedidos
   router.post('/pedidos/nuevo/:idUsuario',auth, pedidosController.nuevoPedido);

   //Mostrar pedidos
   router.get('/pedidos',auth, pedidosController.mostrarPedidos);

   //Pedido por ID
   // router.get('/pedidos/:id', pedidosController.mostrarPedido);
   router.get('/pedidos/:idPedido',auth, pedidosController.mostrarPedido);

   //Actualizar pedido
   router.put('/pedidos/:idPedido',auth, pedidosController.actualizarPedido);

   //Eliminar
   router.delete('/pedidos/:idPedido',auth, pedidosController.eliminarPedido);


   //Usuarios
   router.post('/crear-cuenta',auth, usuariosController.registrarUsuario);
   router.post('/iniciar-sesion',auth, usuariosController.autenticarUsuario);
   
   return router;
}