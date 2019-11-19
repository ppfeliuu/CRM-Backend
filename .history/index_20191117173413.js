const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Cors
const cors = require('cors');


// Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

//Server
const app = express();


// Habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitar cors
app.use(cors());

// Routes App
app.use('/', routes());

//carpeta pulbica
app.use(express.static('uploads'));

// Port
app.listen(5000);