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
      // define association here
      Product.hasMany(models.Review, { foreignKey: 'productId' })
    }
  }
  Product.init({
    id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    countInStock: DataTypes.INTEGER,
    numReviews: DataTypes.INTEGER,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
    rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};