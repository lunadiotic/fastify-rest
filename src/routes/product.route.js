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
}, {
    method: 'PUT',
    url: '/api/products/:id',
    handler: product.update
}, {
    method: 'DELETE',
    url: '/api/products/:id',
    handler: product.delete
}]

module.exports = routes