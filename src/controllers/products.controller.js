const Product = require('../models/products.model')

exports.index = async (req, reply) => {
    try {
        const products = await Product.find()
        return products
    } catch (err) {
        throw new Error(err)
    }
}

exports.store = async (req, reply) => {
    try {
        const product = new Product(req.body)
        return product.save()
    } catch (err) {
        throw new Error(err)
    }
}