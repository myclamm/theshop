require('dotenv').load();
const Product = require('../../models/product.js');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const CheckoutController = {

	checkoutCart: function(req, res, next) {
		const cart = req.body.cart;
		const transaction_token = req.body.token;
		const order_total = cart.items.reduce((accum,curr)=>{
			return accum + curr.price;
		},0);

		// Initiate Stripe Checkout
		stripe.charges.create({
			amount:order_total*100,
			currency:"usd",
			source: transaction_token,
			metadata: {qty: cart.items.length}
		}, function (err, charge) {
			if (err) return next()
			return res.send({charge:charge})
		})

	}
};

module.exports = CheckoutController