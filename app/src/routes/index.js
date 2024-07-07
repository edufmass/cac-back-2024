const router = require('express').Router()

router.use('/course', require('./api/course'))
router.use('/user', require('./api/user'))
router.use('/auth', require('./api/auth'))

module.exports = router