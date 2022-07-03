const db = require('../database/connection');

const create = () => {
  const SQL = "INSERT INTO List (Task) VALUES ('testando')";

  const tasks = db.query(SQL, (err, result) => {
    console.log(err)
  })

  return tasks;
};

module.exports =  {
  create,
}