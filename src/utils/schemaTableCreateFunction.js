const createSchemaAndSyncModel = async (sequelize, schemaCreate, schemaName, alter, model) => {
  try { 
    // Create the schema if it doesn't exist
    if(schemaCreate){
      await sequelize.query(`CREATE SCHEMA IF NOT EXISTS ${schemaName};`);
      console.log(`Schema ${schemaName} created successfully`);
    }

    model.schema(schemaName);


    // Sync the model (create table)
    if(alter){
      // await model.sync({force: true}); 
      await model.sync({alter: true});
    } else{
      await model.sync();
    }
    console.log(`Table for model ${model.name} created successfully in ${schemaName}.`);
  } catch (error) {
    import('chalk').then((chalk) => {
      // console.log(chalk.default.blue.bgWhite("HEADERS ['authorization'] "), req.headers['authorization'])
      console.log(chalk.default.white.bgRed("Error processing "), `${schemaName} or ${model.name}:`, error)
    });
  
  }

console.log(`Creating schema and syncing model ${model.name}`);
console.trace(); // This prints the stack trace to the console

};
module.exports = {createSchemaAndSyncModel}