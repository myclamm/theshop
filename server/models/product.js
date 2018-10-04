mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    "id": { type: String, required: true }, 
    "sku": { type: String, required: true },
    "title": { type: String, required: true },
    "uri": { type: String, required: true },
    "company": { type: String, required: true },
    "cardImage": { type: String, required: true },
    "heroImage": { type: String, required: true },
    "description": { type: String, required: true },
    "price": { type: Number, required: true },
    "lbs": { type: Number, required: true }
})

module.exports = mongoose.model('Product', ProductSchema);