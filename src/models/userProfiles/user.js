const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    schema: 'practice_profiles', 
    tableName: 'user',
  })
  // createSchemaAndSyncModel(sequelize, true, 'practice_profiles', true, User);

  return User  
  } 