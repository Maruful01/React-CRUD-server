const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({

    name: String,
    id: String,
    category: String,
    price: String,
    status: String,

}, {timestamps: true} )

const Product = mongoose.model ('Product', productSchema);
module.exports = Product;