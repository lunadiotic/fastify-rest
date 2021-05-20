const product = require('../controllers/products.controller')
const routes = [{
    method: 'POST',
    url: '/api/products',
    handler: product.store
}]

module.exports = routes