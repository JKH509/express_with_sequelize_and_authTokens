// config/sequelize.js

const Sequelize = require('sequelize');
const config = require('./config');  // Assuming you've a config.js file with your DB configs

const env = process.env.NODE_ENV || 'development';
const environmentConfig = config[env];

const sequelize = new Sequelize(
  environmentConfig.database,
  environmentConfig.username,
  environmentConfig.password,
  // {
  //   ...environmentConfig,   // Spread the entire environment config
  //   schema: environmentConfig.schema  // Include the schema explicitly
  // },
  environmentConfig
);

module.exports = sequelize;

