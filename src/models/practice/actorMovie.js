// const { createSchemaAndSyncModel } = require("../../utils/schemaTableCreateFunction");
const Movie = require('./movie')
const Actor = require('./actor')
module.exports = (sequelize, DataTypes) => {

  const ActorMovie = sequelize.define('ActorMovie', {
    MovieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie, // 'Movies' would also work
        key: 'id'
      }
    },
    ActorId: {
      type: DataTypes.INTEGER,
      references: {
        model: Actor, // 'Actors' would also work
        key: 'id'
      }
    }
  })


  // createSchemaAndSyncModel(sequelize, false, 'practice_schema', false, ActorMovie);
  return ActorMovie  
}