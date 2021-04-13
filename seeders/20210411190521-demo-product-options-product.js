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

    await queryInterface.bulkInsert('ProductOptionProducts', [
      {
        productId: 1,
        productOptionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        productOptionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3,
        productOptionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        productOptionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        productOptionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3,
        productOptionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 1,
        productOptionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 2,
        productOptionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productId: 3,
        productOptionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('ProductOptionProducts', null, {});
  }
};
