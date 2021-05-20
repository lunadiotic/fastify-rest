const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descruption: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    variant: {
        type: Map,
        of: String
    }
})

module.exports = mongoose.model('Product', productsSchema)