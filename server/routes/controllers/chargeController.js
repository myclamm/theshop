require('dotenv').load();
const stripeService = require('../../services/stripe.js');

const ChargeController = {

	getAll: function(req, res, next) {
    stripeService.listCharges()
      .then((charges)=>{
        res.send({charges:charges})
      })
      .catch((err)=>{
        next(err)
      })
	}
};

module.exports = ChargeController
