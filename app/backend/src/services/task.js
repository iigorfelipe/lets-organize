import List from '../database/models/list';

const getAll = async () => {
  const tasks = await List.findAll();

  return tasks;
};

export default {
  getAll,
}