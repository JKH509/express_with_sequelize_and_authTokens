// const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");

module.exports = (sequelize, DataTypes) => {


    const Task = sequelize.define('Task', {
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    schema: 'practice_profiles', 
    tableName: 'task',
  });
  // createSchemaAndSyncModel(sequelize, false, 'practice_profiles', true, Task );

  return Task   
  } 