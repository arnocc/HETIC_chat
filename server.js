// Imports

// Configuration
let express = require('express');
let path = require ('path');
let bodyParser = require('body-parser');

let front = require('./routes/front');
let api = require('./routes/api');

let port = 8080;
let app = express();

// Démarrer le serveur
