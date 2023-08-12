const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");

module.exports = (sequelize, DataTypes) => {


    const Profile = sequelize.define('Profile', {
      bio: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    schema: 'practice_profiles', 
    tableName: 'profile',
  });
  // createSchemaAndSyncModel(sequelize, false, 'practice_profiles', true, Profile );

  return Profile   
  } 