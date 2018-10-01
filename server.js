const express = require('express');
const mongoose = require('mongoose');
const Middleware = require('./api/routes/middleware/middleware.js')
const Routes = require('./api/routes/index.js')
require('dotenv').load();


const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

// Add App-level Middleware
Middleware.utilities(app, router);
// Add API routes
Routes.registerRoutes(app, router);
// Add static file handlers
Middleware.staticFiles(app, express);
// Add Error Handler
Middleware.errorHandler(app)
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });

app.listen(port, function () {
	console.log('Listening on port: ' + port+ '...');
})