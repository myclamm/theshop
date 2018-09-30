const Product = require('../../models/product.js');

const ProductController = {

	findAll: function(req, res, next) {
        Product.find(function(err, products) {
            if(err)return next(err)
            
            res.send(products);
        });
	}
};

module.exports = ProductController