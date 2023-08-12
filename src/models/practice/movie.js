// const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");

module.exports = (sequelize, DataTypes) => {

  const Movie = sequelize.define('Movie', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    schema: 'practice_schema', 
    tableName: 'movie',
  });
  // createSchemaAndSyncModel(sequelize, true, 'practice_schema', false, Movie);

  return Movie  
  } 