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

        await queryInterface.bulkInsert('ProductOptions', [
            {
                name: 'Cheese',
                price: 0.30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Salad',
                price: 0.70,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sweet sauce',
                price: 0.15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('ProductOptions', null, {});
    }
};
