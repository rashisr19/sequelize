'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
       name: 'John Doe',
       email: 'john@email.com',
       uuid:'e0529e29-eb5a-420a-8b7f-e0be29caa3f5',
       role: 'admin',
       createdAt: '2021-06-16T11:48:50.976Z',
       updatedAt: '2021-06-16T11:48:50.976Z'
     }, {
      name: 'Jane Doe',
      email: 'jane@email.com',
      uuid:'e0529e29-eb5a-420a-8b7f-e0be256aa3f5',
      role: 'admin',
      createdAt: '2021-06-16T11:48:59.976Z',
      updatedAt: '2021-06-16T11:48:59.976Z'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});

  }
};
