const mysql = require('mysql');
const dbConfig = require('../configuration/db.config.js')

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
})

connection.connect(error => {
    if(error)
        throw error;
    console.log('....database is successfully connected');
})

module.exports = connection;