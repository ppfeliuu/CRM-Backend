const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({path: 'variables.env'});

// Cors
const cors = require('cors');


// Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

//Server
const app = express();

//carpeta pulbica
app.use(express.static('uploads'));


// Habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Definir dominio para peticiones
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: (origin, callback) => {
        // console.log(origin);
        // Revisa si la peticion viene de la whitelist
        const existe = whiteList.some( dominio => dominio === origin);
        if(existe) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por cors'));
        }
    }
}

//Habilitar cors
app.use(cors(corsOptions));

// Routes App
app.use('/', routes());




const host = '0.0.0.0';
const port = process.env.PORT;

// Port
app.listen(port, host, () => {
    console.log('Server Running!');
});