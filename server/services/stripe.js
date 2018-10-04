const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripeService = {
  createCharge: (orderObj,callback) => {
    const { amount, currency, source, metadata} = orderObj;
    
    stripe.charges.create({
			amount: amount,
			currency: currency,
			source: source,
			metadata: metadata
		}, callback)
  }
}

module.exports = stripeService;