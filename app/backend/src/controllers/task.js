const service = require('../services/task');

const create = (req, res) => {
  const { tasks } = req.body;

  const list = service.create(tasks);
  console.log(list)

  return res.status(200).json(list);
};

module.exports =  {
  create,
}