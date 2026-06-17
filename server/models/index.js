const sequelize = require('../config/database');
const User = require('./User');
const File = require('./File');
const Project = require('./Project');

User.hasMany(File, { foreignKey: 'userId' });
File.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Project, { foreignKey: 'ownerId' });
Project.belongsTo(User, { foreignKey: 'ownerId' });

Project.hasMany(File, { foreignKey: 'projectId' });
File.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = {
  sequelize,
  User,
  File,
  Project,
};
