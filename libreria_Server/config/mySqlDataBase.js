const mysql2 = require('mysql');
require('dotenv').config();

const mysqlConnection = mysql2.createConnection({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // port: process.env.DB_PORT,
    // password: process.env.DB_PASS,
    // database: process.env.DB_DATABASE,

    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'BA578ae3',
    database: 'libreriacyl',

});

mysqlConnection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Servidor conectado a MySQL');
    }
})
module.exports = mysqlConnection;
