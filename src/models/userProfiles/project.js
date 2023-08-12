const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");

module.exports = (sequelize, DataTypes) => {

    const Project  = sequelize.define('Project', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    schema: 'practice_profiles', 
    tableName: 'project',
  });
  // createSchemaAndSyncModel(sequelize, false, 'practice_profiles', false, Project  );

  return Project    
  } 