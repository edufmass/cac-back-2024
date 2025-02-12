const { Sequelize } = require ("sequelize");
const env = process.env.NODE_ENV || 'development';
const dbconfig = require("./dbconfig")[env];

console.log('app.js dbName: ' + dbconfig.database + ' - dbHost: ' + dbconfig.host + ' - dbPort: ' + dbconfig.port);

const db = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db