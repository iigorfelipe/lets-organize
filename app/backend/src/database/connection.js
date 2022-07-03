require('dotenv').config();
const mysql = require('mysql2')

module.exports = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.HOSTNAME || 'localhost',
});