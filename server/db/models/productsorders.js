'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {

    static associate(models) {
      models.Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        foreignKey: 'order_id',
        onDelete: 'CASCADE',
      });
      models.Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        foreignKey: 'product_id',
        onDelete: 'CASCADE',
        //hooks: true
      });
    }
  }

ProductsOrders.init({
  order_id: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER,
  qtd: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'ProductsOrders',
});

return ProductsOrders;
};