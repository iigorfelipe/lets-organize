const Model = require('../models/task');

const create = (task) => {
  Model.create(task);
};

// const getAll = () => {
//   const list = Model.getAll()

//   return list;
// };

module.exports = {
  create,
  // getAll,
};
