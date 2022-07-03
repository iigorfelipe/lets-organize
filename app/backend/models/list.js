const List = (sequelize, DataTypes) => {
  const List = sequelize.define("List", {
    Task: DataTypes.STRING,
  });

  return List;
};

module.exports = List;
