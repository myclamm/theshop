const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

module.exports = {
    utilities: function(app, router) {
        // Lets us get data from POST requests
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        // Enable CORS
        app.use(cors());
        // Use morgan to log requests to the console
        app.use(morgan('dev'));
        // Prefix all API endpoints with api
        app.use('/api', router);
    },
    staticFiles: function (app, express) {
        
        // Serve React Client in Prod
        if (process.env.NODE_ENV === 'production') {
            let appDir = path.dirname(require.main.filename);
            // Serve static files
            app.use(express.static(path.join(appDir, '/client/build')));
            // Redirect to index.html
            app.get('*', (req, res) => {
                res.sendFile(path.join(appDir, 'client', 'build', 'index.html'));
            });
        }
    },
    authenticate: function () {
        return true;
    },
    validate: function () {
        return true;
    },
    errorHandler: function (app) {
        app.use(function (err, req, res, next) {
            console.log('Error caught',err)
            let response = {
                message: err.message,
                error: err                       
            };

            res.status(err.status || 500)
                .json(response);
        });
    }
}