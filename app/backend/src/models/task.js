const db = require('../database/connection');

const create = (task) => {
  task.forEach((task) => {
    if (task.check) task.check = 1;
    else task.check = 0;

    const SQL =
      'INSERT INTO lists (newID, task, status, checked) VALUES (?, ?, ?, ?)';

    db.query(SQL, [task.id, task.newText, task.stts.id, task.check]);
  });
};

const getAll = (req, res) => {
  const SQL = 'SELECT * FROM lists';

  db.query(SQL, (err, result) => {
    if (err) console.log(err);

    return res.send(result); // não estava conseguindo jogar o result pra fora do escopo por isso a requisição está sendo diretamente na model mas irei procurar uma solução pra isso o quanto antes
  });
};

module.exports = {
  create,
  getAll,
};
