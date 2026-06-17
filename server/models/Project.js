const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  ownerId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
});

module.exports = Project;
