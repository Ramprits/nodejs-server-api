const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true, index: true },
    desc: { type: String, require: true },
    price: { type: Number, require: true },
    stock: { type: Number, require: true },
    images: { type: [String] },
    available: { type: Boolean, default: true },
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model("Product", productSchema)