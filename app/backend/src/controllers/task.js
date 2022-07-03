const service = require('../services/task');

const create = (req, res) => {
  // const { Task } = req.body;

  const tasks = service.create();
  console.log(tasks)

  // return res.status(200).json(tasks);
};

module.exports =  {
  create,
}