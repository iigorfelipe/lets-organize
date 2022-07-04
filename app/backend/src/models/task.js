const db = require("../database/connection");

const create = (task) => {
  task.forEach((task) => {
    if (task.check) task.check = 0;
    else task.check = 1;

    const SQL = 'INSERT INTO lists (newID, task, status, checked) VALUES (?, ?, ?, ?)';

    db.query(SQL, [task.id, task.newText, task.stts.id, task.check]);
  });
};

const getAll = () => {
  const SQL = 'SELECT * FROM lists';

  db.query(SQL, (err, result) => {
    if (err) console.log(err);

    return result
  });
};

module.exports = {
  create,
  getAll,
};
