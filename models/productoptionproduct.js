'use strict';
const {
  Model
} = require('sequelize');
const Product = require('./product');
const ProductOption = require('./productoption');
module.exports = (sequelize, DataTypes) => {
  class ProductOptionProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductOptionProduct.init({
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    productOptionId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductOption,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ProductOptionProduct',
  });
  return ProductOptionProduct;
};
