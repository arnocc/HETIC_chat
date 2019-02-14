// Imports

// Configuration du serveur
let express = require('express');
let path = require ('path');
let bodyParser = require('body-parser');

let front = require('./routes/front');
let api = require('./routes/api');

let port = 8080;
let app = express();

// Dossier statique de la partie front

// Body parser

// Définition des routes


// Démarrer le serveur
app.listen(port, () => {
    console.log('Server started on port ' + port);
});