const Product = require('../models/products.model')

exports.store = async (req, reply) => {
    try {
        const product = new Product(req.body)
        return product.save()
    } catch (err) {
        throw new Error(err)
    }
}