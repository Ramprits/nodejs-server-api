const express = require('express')
const ProductModel = require('../models/Product.model')
const { getPagination } = require('../services/query')
const Router = express.Router()

Router.get("/", async function (req, res) {
    const { skip, limit, page } = getPagination(req.query)
    const totalCount = await ProductModel.countDocuments()
    const products = await ProductModel.find({}).sort({ name: 1 }).skip(skip).limit(limit)
    return res.status(200).json({ list: products, total: totalCount, page, limit })
})

Router.post("/", async function (req, res) {
    const product = new ProductModel(req.body)
    await product.save()
    return res.status(201).json({ message: "Product saved successfully" })
})

module.exports = Router