const service = require('../services/task');

const create = (req, res) => {
  const { task } = req.body;

  service.create(task);
};

// const getAll = (req, res) => {
//   const list = service.getAll();

//   return res.send(list);
// };

module.exports = {
  create,
  // getAll,
};
