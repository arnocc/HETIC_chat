// Imports
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const ejs = require('ejs');


// Configuration du serveur

    const serv = express();
    const port = process.env.PORT

// Dossier statique de la partie front

// Body parser

// Définition des routes


// Démarrer le serveur
    server.listen(port, () => {
        console.log('Server is active on port ${port}');
    });