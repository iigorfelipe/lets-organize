const Model = require('../models/task');

const create = (tasks) => {
  const list = Model.create(tasks)

  return list;
};

module.exports =  {
  create,
}