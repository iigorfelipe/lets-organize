'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('List', [{
       Task: 'one piece',
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('List', null, {});
  }
};
