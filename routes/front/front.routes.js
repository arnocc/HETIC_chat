// Import

    // Node
    const express = require('express');
    const Router = express.Router();
    
    // Configuration
    class RouterClass {
        routes(){
            router.get('/', (req, res) => {
                res.render('index');
            });
        
            router.get('/register', (req, res) => {
                res.render('register');
            });
            router.get('/login', (req, res) => {
                res.render('login');
            });
            router.get('/chat', (req, res) => {
                res.render('chat');
            });
        }
        init(){
            this.routes();
            return router
        }
    }


    // Export
    module.exports = mainRouter;