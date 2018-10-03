const Product = require('../../models/product.js');

const CheckoutController = {

	checkoutCart: function(req, res, next) {
                const cart = req.body.cart;
                const stripe_token = req.token;
                const order_total = cart.items.reduce((accum,curr)=>{
                        return accum + curr.price;
                },0);

                return res.send({total:order_total})
	}
};

module.exports = CheckoutController