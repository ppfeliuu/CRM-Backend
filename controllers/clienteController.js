const Clientes = require('../models/Clientes');

//Añade nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        //Almacenar registro
        await cliente.save();
        res.json({mensaje: 'Se agreagó nuevo cliente'});

    } catch (error) {
        res.send(error);
        next();
    }
}

exports.obtenerClientes = async(req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerCliente = async(req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);
    
    if(!cliente) {
        res.json({mensaje: 'Cliente no existe'});
        next();
    }

    res.json(cliente);    
}


exports.actualizarCliente = async(req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({ _id: req.params.idCliente},
        req.body, {
            new: true
        });
        res.json(cliente);
    } catch (error) {
        res.send(error);
        next();
    }  
}


exports.eliminarCliente = async(req, res, next) => {
    try {
        
        await Clientes.findOneAndDelete({ _id: req.params.idCliente})        
        res.json({mensaje: 'Cliente eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }  
}