'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {

    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: 'user_id',
      });
      Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        as: 'orders',
        foreignKey: 'order_id',
        onDelete: 'CASCADE',
        hooks: true
      });
    }
  };
  Orders.init({
    user_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};