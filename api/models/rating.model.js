const sequelize = require('../../db/index');
const { DataTypes } = require('sequelize');

const Rating = sequelize.define('rating', {
  rate: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Rating;