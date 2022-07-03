const List = require('../database/models');

const getAll = async () => {
  const tasks = await List.findAll();

  return tasks;
};

module.exports =  {
  getAll,
}