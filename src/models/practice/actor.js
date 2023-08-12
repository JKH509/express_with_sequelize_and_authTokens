const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");

module.exports = (sequelize, DataTypes) => {

  const Actor = sequelize.define('Actor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    schema: 'practice_schema', 
    tableName: 'Actor',
  });
  // createSchemaAndSyncModel(sequelize, false, 'practice_schema', false, Actor);

  return Actor  
  } 