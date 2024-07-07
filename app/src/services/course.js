const Service = require('./service')
const Course = require('../models/courseModel')

class CourseService extends Service {
  constructor () {
    super(Course)
  }
}

module.exports = CourseService