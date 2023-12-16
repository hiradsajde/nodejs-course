const Sequelize = require('sequelize')

const sequalize = new Sequelize('nodejs-train','root' , 'Hs#38313831' , {
    dialect : 'mysql',
    host : 'localhost',

})

module.exports = sequalize