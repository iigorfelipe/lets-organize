const service = require('../services/task');

const create = async (req, res) => {
  const { Task } = req.body;

  const tasks = await service.create(Task);
  console.log(tasks)

  return res.status(200).json(tasks);
};

module.exports =  {
  create,
}