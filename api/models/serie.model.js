const sequelize = require('../../db/index');
const { DataTypes } = require('sequelize');

const Serie = sequelize.define('serie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Serie;
