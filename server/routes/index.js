const ProductCtrl = require('./controllers/productController.js');
const CheckoutCtrl = require('./controllers/checkoutController.js');
const mdw = require('./middleware/middleware.js');

module.exports = {
    registerRoutes: registerRoutes
};

function registerRoutes(app,router) { 
    //Adds routes to the express router
    router.route('/products')
    .get(
        // mdw.authenticate, 
        // mdw.validate(), 
        ProductCtrl.findAll
    )

    router.route('/checkout')
    .post(
        // mdw.authenticate, 
        // mdw.validate(), 
        CheckoutCtrl.checkoutCart
    )
}

