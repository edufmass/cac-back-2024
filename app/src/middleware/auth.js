
const { UNAUTHORIZED } = require('../helpers/constants')
const http = require('../helpers/http')
const tokenize = require('../helpers/tokenize')
const UserService = require('../services/user')

const AuthHelper = module.exports

AuthHelper.checkAuth = (roles) => {
  return async (req, res, next) => {
    try {

      if(!req.headers.authorization) {
        return res.status(UNAUTHORIZED).json(http.response(null, UNAUTHORIZED, 'Unauthorized'))
      }

      const token = req?.headers?.authorization.split(' ')[1]
      const data = tokenize.verify(token)

      console.log('token: ' + token);
      console.log('data: ' + data);

      if (!data) {
        return res.status(UNAUTHORIZED).json(http.response(null, UNAUTHORIZED, 'Unauthorized'))
      }

      const user = await new UserService().findByPk(data?.sub?.id)

      if ((roles.length > 0) && !roles.includes(user?.role?.toUpperCase())) {
        return res.status(UNAUTHORIZED).json(http.response(null, UNAUTHORIZED, 'Unauthorized'))
      }

      req.user = user.dataValues
      return next()
    } catch (error) {
      console.log(error)
      return res.status(UNAUTHORIZED).json(http.response(null, UNAUTHORIZED, 'Unauthorized'))
    }
  }
}