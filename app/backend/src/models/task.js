const db = require("../database/connection");

const create = (task) => {
  task.forEach((task) => {
    if (task.check) task.check = 0;
    else task.check = 1;

    const SQL = 'INSERT INTO lists (newID, task, status, checked) VALUES (?, ?, ?, ?)';

    db.query(SQL, [task.id, task.newText, task.stts.id, task.check]);
  });
};

module.exports = {
  create,
};
