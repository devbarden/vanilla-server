const http = require('http')
const { productsAPI } = require('./router/productsAPI')

const PORT =  process.env.PORT || 3000
const server = http.createServer((req, res) => productsAPI(req, res))

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
