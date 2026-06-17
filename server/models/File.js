const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const File = sequelize.define('File', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originalName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  mimeType: {
    type: DataTypes.STRING,
  },
  version: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  projectId: {
    type: DataTypes.UUID,
  },
}, {
  timestamps: true,
});

module.exports = File;
