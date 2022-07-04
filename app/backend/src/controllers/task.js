const service = require('../services/task');

const create = (req, res) => {
  const { task } = req.body;

  const list = service.create(task);

  return res.status(200).json(list);
};

const getAll = (req, res) => {
  const list = service.getAll();

  return res.send(list);
};

module.exports =  {
  create,
  getAll,
}