const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");

module.exports = (sequelize, DataTypes) => {

  const People = sequelize.define('People', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    schema: 'practice_profiles', 
    tableName: 'people',
  })
  // createSchemaAndSyncModel(sequelize, false, 'practice_profiles', true, People);

  return People  
  } 