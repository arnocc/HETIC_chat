// Imports
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');
    const ejs = require('ejs');

// Inner
    const mainRouter = require('./routes/main.router');


// Configuration du serveur

    const serv = express();
    const port = process.env.PORT;

    class ServerClass {
        init(){
            // Config du dossier client
            server.set( 'views', __dirname + '/ww');
            server.use( express.static(path.join(__dirname, 'ww')) );

            // Config du moteur de rendu
            server.set( 'view engine(, (ejs' );

            // Configurer les routes
            server.use('/', mainRouter);

            // lancer le serveur
            this.launch();
        }
        
        launch(){
            server.listen(port, () => {
                console.log('Server is active on port ${port}');
            });
        }
    }

// Dossier statique de la partie front

// Body parser

// Définition des routes


// Démarrer le serveur

    new ServerClass().launch();