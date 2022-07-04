const service = require('../services/task');

const create = (req, res) => {
  const { task } = req.body;
  console.log(task)

  const list = service.create(task);

  return res.status(200).json(list);
};

module.exports =  {
  create,
}