'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Product, {
        through: 'ProductOptionProduct',
        as: 'products',
        foreignKey: 'productOptionId',
        otherKey: 'productId'
      });
      // define association here
    }
  };
  ProductOption.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'ProductOption',
    timestamps: false
  });
  return ProductOption;
};
