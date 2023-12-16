const productModel = require('./models')
const path = require('path')

const products = new productModel()

module.exports.getAddProduct = (req , res) => {
    res.render('add-product')
}

module.exports.postAddProduct = (req , res) => {
    products.addProduct(req.body.title).then((result => {
        res.redirect('/')
    }))
}
module.exports.getAllProducts = (req , res) => {
    products.getProducts().then(productList => {
        const prods = productList[0].map(prod => prod.title)
        res.render('shop' , {products : prods})
    })
}

module.exports.getProduct = (req , res , next) => {
    products.getProduct(req.params.product).then(product => {
        const prod = product[0][0].title
        res.status(200).send(`<h1>${prod}</h1>`)
        next()
    })
}