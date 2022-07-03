'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('List', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Task: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('List');
  }
};