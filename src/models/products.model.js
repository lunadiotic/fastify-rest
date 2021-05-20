const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    variant: [{
        title: {
            type: String
        },
        price: {
            type: String
        }
    }]
})

module.exports = mongoose.model('Product', productsSchema)