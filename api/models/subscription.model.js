const sequelize = require('../../db/index');
const { DataTypes } = require('sequelize');

const Subscription = sequelize.define('subscription', {
  type: {
    type: DataTypes.ENUM('month', 'year'),
    defaultValue: 'month'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Subscription;
