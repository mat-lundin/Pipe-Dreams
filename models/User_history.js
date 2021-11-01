const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User')

class User_history extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
    zip: {
      type: DataTypes.TEXT,
    //   allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_history',
  }
);

module.exports = User_history;
