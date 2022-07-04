const Model = require('../models/task');

const create = (task) => {
  const list = Model.create(task)

  return list;
};

const getAll = () => {
  const list = Model.getAll()

  return list;
};

module.exports =  {
  create,
  getAll,
}