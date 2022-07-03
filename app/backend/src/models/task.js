const db = require('../database/connection');

const create = (tasks) => {
  const SQL = `

  `
  const list = db.query(SQL, (err, result) => console.log(err));

  return list;
};

module.exports =  {
  create,
}