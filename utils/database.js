const mysql = require('mysql2')

const pool = mysql.createPool({
    host : "localhost",
    user : "root" , 
    password : "Hs#38313831",
    database : "nodejs-train"
})

module.exports = pool.promise()