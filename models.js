const Sequelize = require('sequelize')

const sequlize = require('./utils/database')

const Product = sequlize.define('product' , {
    id : {
        type : Sequelize.INTEGER, 
        autoIncrement : true, 
        allowNull : false,
        primaryKey : true,
    },
    title : Sequelize.STRING
})
module.exports = Product