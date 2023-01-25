const { createPool } = require('mysql2/promise')

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '0980',
    port: '3306',
    database: 'usersdb'
})
 
module.exports = pool