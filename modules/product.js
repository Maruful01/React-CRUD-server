const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Schema = mongoose.Schema;

const productSchema = new Schema ({

    name: String,
    id: String,
    category: String,
    price: String,
    price: String,
    Status: String,

}, {timestamps: true} )

const Product = mongoose.model ('Product', productSchema);
module.exports = Product;