require('dotenv').config()

module.exports = {
  port: process.env.APP_PORT || 3000,
  host: process.env.APP_HOST || localhost,
  env: process.env.NODE_ENV || 'development',
  db: {
    url: process.env.DB_URL || '',
    drive: process.env.DB_DRIVE || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || 'database_name',
    user: process.env.DB_USER || '',
    pass: process.env.DB_PASS || '',
    connection_name: process.env.DB_CONN_NAME || '',
    connlimit: 100 //connlimit: process.env.DB_CONNLIMIT || 100
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret'
  }
}