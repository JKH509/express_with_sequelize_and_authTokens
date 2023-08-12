'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize')

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};


function loadModels(directory) {
  fs
    .readdirSync(directory)
    .forEach(entry => {
      // console.log("ENTRY ", entry)
      const entryPath = path.join(directory, entry);
      if (fs.statSync(entryPath).isDirectory()) {
        // It's a directory, recurse into it
        loadModels(entryPath);
      } else if (
        entry.indexOf('.') !== 0 &&
        entry !== basename &&
        entry.slice(-3) === '.js' &&
        entry.indexOf('.test.js') === -1
      ) {
        const model = require(entryPath)(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
      }
    });
}

// let excludedDirs = ["ActorMovie", "Movie", "Actor", "Profile", "People", "Project", "Task" ]
// if(!modelName.includes(excludedDirs)){
//   console.log("DB -> ", modelName)
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// }
loadModels(__dirname);
Object.keys(db).forEach(modelName => {
  console.log("DB -> ", modelName)
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}); 




// One-to-One Relationship
db.People.hasOne(db.Profile);
db.Profile.belongsTo(db.People);

// One-to-Many Relationship
// User and Task Models: A user can have many tasks 
db.People.hasMany(db.Task);
db.Task.belongsTo(db.People);

// Many-to-Many Relationship
// User and Project Models: A user can be part of many projects, and a project can have many users.
db.People.belongsToMany(db.Project, { through: 'UserProject' });
db.Project.belongsToMany(db.People, { through: 'UserProject' });

// db.Movie.belongsToMany(db.Actor, { through: 'ActorMovie' });
// db.Actor.belongsToMany(db.Movie, { through: 'ActorMovie' });

db.Role.belongsToMany(db.User, { through: 'UserRole' });

// In Role model
db.Role.belongsToMany(db.Permission, { through: db.RolePermission, foreignKey: 'role_id' });

// In Permission model
db.Permission.belongsToMany(db.Role, { through: db.RolePermission, foreignKey: 'permission_id' });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// sequelize.sync({ force: true })
// sequelize.sync()
//   .then(() => {
//     console.log('Database & tables created!');
//   });

sequelize.authenticate()
.then(() => {
  console.log('connected..')
})
.catch(err => {
  console.log('Error'+ err)
})

module.exports = db;

