import 'dotenv/config';

const mysql = require('mysql2');

const connection = mysql.createConnection({
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST || 'localhost',
});

module.exports = connection;
