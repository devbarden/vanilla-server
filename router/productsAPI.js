const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')

const productsAPI = (req, res) => {
  switch(req.method) {
    case 'GET':
      if (req.url === '/api/products') {
        getProducts(req, res)
      } else if (req.url.match(/\/api\/products\/\w+/)) {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
      }

      break

    case 'POST':
      if (req.url === '/api/products') {
        createProduct(req, res)
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
      }

      break

    case 'PUT':
      if (req.url.match(/\/api\/products\/\w+/)) {
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
      }

      break

    case 'DELETE':
      if (req.url.match(/\/api\/products\/\w+/)) {
        const id = req.url.split('/')[3]
        deleteProduct(req, res, id)
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
      }

      break

    default:
      return
  }
}

module.exports = {
  productsAPI,
}
