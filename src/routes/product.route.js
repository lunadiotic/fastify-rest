const product = require('../controllers/products.controller')
const routes = [{
    method: 'GET',
    url: '/api/products',
    handler: product.index
}, {
    method: 'POST',
    url: '/api/products',
    handler: product.store
}]

module.exports = routes