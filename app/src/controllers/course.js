const http = require('../helpers/http');

const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants');

const CourseService = require('../services/course')

const CourseController = module.exports

CourseController.findAll = async (req, res) => {
  try {
    const state = await new CourseService().findAll()
    return res.status(OK).json(http.response(state, OK, 'Course found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Course not found'))
  }
}
CourseController.findOne = async (req, res) => {
  try {
    const state = await new CourseService().findByPk(req.params.courseId)
    return res.status(OK).json(http.response(state, OK, 'Course found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Course not found'))
  }
}
CourseController.create = async (req, res) => {
  try {
    const state = await new CourseService().create(req.body)
    return res.status(OK).json(http.response(state, OK, 'Course created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Course not created'))
  }
}
CourseController.update = async (req, res) => {
  try {
    const state = await new CourseService().update(req.params.courseId, req.body)
    return res.status(OK).json(http.response(state, OK, 'Course updated'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Course not updated'))
  }
}
CourseController.remove = async (req, res) => {
  try {
    const state = await new CourseService().remove(req.params.courseId)
    return res.status(NO_CONTENT).json(http.response(state, OK, 'Course deleted'))
  } catch (error) {
    console.error(error)
    return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'Course not deleted'))
  }
}