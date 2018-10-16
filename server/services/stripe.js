const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const stripeService = {

  createCharge: async function(orderObj) {
    const { amount, currency, source, metadata} = orderObj;
		
		
    const charge = await stripe.charges.create({
			amount: amount,
			currency: currency,
			source: source,
			metadata: metadata
		})

		return charge;
	},

	listCharges: async function() {
		const charges = stripe.charges.list(
			{ limit: 3 });
		
		return charges;
	}
	
}

module.exports = stripeService;