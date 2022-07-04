const Model = require('../models/task');

const create = (task) => {
  const list = Model.create(task)

  return list;
};

module.exports =  {
  create,
}