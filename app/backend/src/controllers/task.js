const service = require('../services/task');

const getAll = async (_req, res) => {
  const tasks = await service.getAll();

  return res.status(200).json(tasks);
};

module.exports =  {
  getAll,
}