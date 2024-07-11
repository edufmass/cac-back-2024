const config = require('./../config/configs')

module.exports = {
  development: {
    url: config.db.url,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.drive,
    define: {
      underscored: true
    },
    pool: {
      max: config.db.connlimit,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    url: config.db.url,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.drive,
    define: {
      underscored: true
    },
    pool: {
      max: config.db.connlimit,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}