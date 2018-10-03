mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ProductSchema   = new Schema({
    sku: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
	price: { type: Number, required: true },
	lbs: { type: Number, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);