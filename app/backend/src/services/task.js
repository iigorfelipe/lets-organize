const Model = require('../models/task');

const create = () => {
  const tasks = Model.create()

  return tasks;
};

module.exports =  {
  create,
}