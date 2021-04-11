'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ProductCategory, { foreignKey: 'categoryId', as: 'category' })
      // define association here
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
