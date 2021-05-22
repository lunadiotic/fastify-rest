const product = require('../controllers/products.controller')
const routes = [{
    method: 'GET',
    url: '/api/products',
    handler: product.index
}, {
    method: 'GET',
    url: '/api/products/:id',
    handler: product.show
}, {
    method: 'POST',
    url: '/api/products',
    handler: product.store
}]

module.exports = routes