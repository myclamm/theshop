mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ProductSchema   = new Schema({
	name: String,
	price: String,
    discountRate: String
});

module.exports = mongoose.model('Product', ProductSchema);