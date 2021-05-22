const Product = require('../models/products.model')

exports.index = async (req, reply) => {
    try {
        const products = await Product.find()
        return products
    } catch (err) {
        throw new Error(err)
    }
}

exports.show = async (req, reply) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        return product
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

exports.update = async (req, reply) => {
    try {
        const id = req.params.id
        const product = req.body
        const {
            ...updateData
        } = product
        const update = await Product.findByIdAndUpdate(id, updateData, {
            new: true
        })
        return update
    } catch (err) {
        throw new Error(err)
    }
}

exports.delete = async (req, reply) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndRemove(id)
        return product
    } catch (err) {
        throw new Error(err)
    }
}