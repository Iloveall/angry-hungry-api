'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('ProductCategories', [
            {
                name: 'Chinese',
                url: 'chinese',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'European',
                url: 'european',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ukrainian',
                url: 'ukrainian',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Italian',
                url: 'italian',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Asian',
                url: 'asian',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'American',
                url: 'american',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Japan',
                url: 'japan',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('ProductCategories', null, {});
    }
};
