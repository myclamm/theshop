const Product = require('../../models/product.js');
const products = require('../../data/products.json');
const ProductController = {

	findAll: function(req, res, next) {
		// Product.find(function(err, products) {
		//     if(err)return next(err)
				
		//     res.send(products);
		// });
		res.send(JSON.stringify(products));
	}
};

module.exports = ProductController