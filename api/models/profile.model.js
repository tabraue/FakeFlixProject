const sequelize = require('../../db/index');
const { DataTypes } = require('sequelize');

const Profile = sequelize.define('profile', {
  nick: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  profileImg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Profile;
