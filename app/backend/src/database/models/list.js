module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    Task: DataTypes.STRING,
  }, {
    freezeTableName: true
  });

  return List;
};
