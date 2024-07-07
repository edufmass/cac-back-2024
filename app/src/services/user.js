const Service = require('./service')
const User = require('../models/userModel')

class UserService extends Service {
  constructor () {
    super(User)
  }
}

module.exports = UserService