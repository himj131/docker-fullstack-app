const mysql = require("mysql2");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'mj',
    database: 'myapp'
});

exports.pool = pool