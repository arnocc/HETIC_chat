// Import

    // NodeJS
    const { Router } = require('express');

    // Inner
    const frontRouter = require('./front/front.routes')

// Configuration

    const mainRouter = Router();
    mainRouter.use('/', frontRouter);
    
// Export

    module.exports = mainRouter;