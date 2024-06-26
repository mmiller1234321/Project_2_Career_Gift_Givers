const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model {}

Skill.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
  
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'skill',
  }
);

module.exports = Skill;
