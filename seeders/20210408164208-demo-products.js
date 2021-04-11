'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Products', [
            // American
            {
                name: 'Chicken burger',
                price: 3.3,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chicken double burger',
                price: 4.5,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chicken double burger',
                price: 4.5,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cheese burger',
                price: 2.6,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cheese double burger',
                price: 4,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Salmon burger',
                price: 2.6,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Salmon spacy burger',
                price: 2.8,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Salmon big burger',
                price: 2.8,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fish burger',
                price: 2.2,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Coca cola',
                price: 0.50,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fanta',
                price: 0.50,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sprite',
                price: 0.50,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Italian
            {
                name: 'Pizza Quatro di Carne',
                price: 0.50,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pizza Quatro di Carne',
                price: 8,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pizza 4 cheeses',
                price: 10,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pizza seafood',
                price: 12,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pizza Carbonara',
                price: 12,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pizza Margarita',
                price: 6,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pizza Family',
                price: 8,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Japan
            {
                name: 'Philadelphia Classic Roll',
                price: 5,
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Philadelphia Roll with Acne',
                price: 6,
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'California Roll',
                price: 6,
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Green Dragon Roll',
                price: 8,
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gold Dragon Roll',
                price: 8,
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Super Dragon Roll',
                price: 6,
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Transparent noodles with chicken',
                price: 7,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Transparent noodles with veal',
                price: 4,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Udon with chicken',
                price: 8,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Udon with veal',
                price: 6,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Udon with seafood',
                price: 8,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Rise with seafood',
                price: 9,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Rise with prawns',
                price: 10,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Salmon steak with steamed rice',
                price: 12,
                categoryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Grilled vegetables',
                price: 10,
                categoryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sea bass stuffed with seafood with baked potatoes',
                price: 15,
                categoryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Pork medallions with cranberry sauce',
                price: 8,
                categoryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Homemade borsch with meat',
                price: 2,
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Solyanka meat',
                price: 2,
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Grilled chicken steak',
                price: 5,
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Homemade cutlet',
                price: 5,
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Products', null, {});
    }
};
