const router = require('express').Router();
const { checkAuth } = require('../../middleware/auth');
const CourseController = require('../../controllers/course');

router.post('/', CourseController.create);
router.get('/', CourseController.findAll);
router.get('/:courseId', checkAuth(['ADMIN', 'STUDENT']), CourseController.findOne);
router.put('/:courseId', CourseController.update);
router.delete('/:courseId', CourseController.remove);

module.exports = router;