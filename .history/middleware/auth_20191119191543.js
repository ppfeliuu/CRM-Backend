const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    //autorizacion por el header
    const authHeader = req.get('Authorization');

    if(!authHeader) {
        const error = new Error('No autenticado, no hay token');
        error.statusCode = 401;
        throw error;
    }


}