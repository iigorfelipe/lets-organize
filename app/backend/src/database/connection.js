require('dotenv').config();

export default connection = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.HOSTNAME || 'localhost',
  dialect: 'mysql',
};