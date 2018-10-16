require('dotenv').load();
const stripeService = require('../../services/stripe.js');

const CheckoutController = {

	checkoutCart: function(req, res, next) {
		const cart = req.body.cart;
		const transaction_token = req.body.token;
		const order_total = cart.items.reduce((accum,curr)=>{
			return accum + curr.price;
		},0);
		
		const chargeObj = {
			amount:order_total*100,
			currency:"usd",
			source: transaction_token,
			metadata: {qty: cart.items.length}
		}

		// Initiate Stripe Checkout
		const charge = stripeService.createCharge(chargeObj)

		charge
		.then((data)=>{
			res.send({charge:data})
		})
		.catch((err)=>{
			next(err)
		})
		// console.log('charge',charge)
		// res.send({charge:charge});

	}
};

module.exports = CheckoutController