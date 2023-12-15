const productModel = require('./models')
const path = require('path')

const product = new productModel()

module.exports.getAddProduct = (req , res) => {
    res.render('add-product')
}

module.exports.postAddProduct = (req , res) => {
    product.addProduct(req.body.title)
    res.redirect('/')
}
module.exports.getAllProducts = (req , res) => {
    res.render('shop' , {products : product.getProducts()})
}