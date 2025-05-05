// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true }, // "kit" or "bot"
    inline: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true } // Store image filename or URL
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
