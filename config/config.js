
require('dotenv').config(); // if you're using dotenv for environment variables
  
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // or mysql, sqlite, etc.
    // schema: process.env.DB_DEF_SCHEMA,
    // dialect: process.env.DB_DIALECT, // or mysql, sqlite, etc.
  },
  test: {
    username: "db_username",
    password: "db_password",
    database: "db_name",
    host: "db_host",
    dialect: "postgres", // or mysql, sqlite, etc.
  },
  production: {
    username: "db_username",
    password: "db_password",
    database: "db_name",
    host: "db_host",
    dialect: "postgres", // or mysql, sqlite, etc.
  }
};

