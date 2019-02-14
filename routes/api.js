// configuration du module
    let express = require('express');
    let router = express.Router();

// configuration de la base MongoDB
    let mongodb = require('mongodb');
    let ObjectifId = mongodb.ObjectID;
    let MongoClient = mongodb.MongoClient;
    let mongoUrl = 'mongodb://localhost:27017/tasks';

// Configuration de la route pour afficher la liste des tâches => get

    router.get('/tasks', (req, res, next) => {
        
        // Ouvrir une connexion sur la base MongoDB
        MongoClient.connect(mongodbUrl, (err, db) => {
            
            // Tester la connexion
            if(err){ res.send(err) }
            
            else {
                
                // Récupération des documents de la collection 'list' => find
                db.collection('list').find().toArray((err, tasks) => {
                    
                    // Tester la commande MongoDb
                    if(err){ res.send(err) }
                    
                    else {
                        // envoyer les données au format json
                        res.json(tasks)
                    }
                })
            }
            
            // Fermer la connexion à la base MongoDb
            db.close();
        })
    });
               
            

  