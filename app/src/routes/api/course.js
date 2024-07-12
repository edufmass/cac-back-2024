const router = require('express').Router();
const { checkAuth } = require('../../middleware/auth');
const CourseController = require('../../controllers/course');

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - category
 *         - duration
 *         - author
  *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the course
 *         title:
 *           type: string
 *           description: The title of your course
 *         description:
 *           type: string
 *           description: The description of your course
 *         category:
 *           type: string
 *           description: The category of your course
 *         duration:
 *           type: string
 *           description: The duration of your course
 *         author:
 *           type: string
 *           description: The course author
 *         image:
 *           type: string
 *           description: The url to your image course
 *         createdAt:
 *           type: date-time
 *           description: The date the course was added
 *         updatedAt:
 *           type: date-time
 *           description: The date the course was updated
 *       example:
 *         id: 1
 *         title: Learn NodeJS
 *         description: Learn NodeJS with practical exercises
 *         category: programming
 *         duration: 4 months
 *         author: Grupo 20
 *         image: https://someurl/learnNodejs.png
 */


/**
 * @swagger
 * /course:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       description: Course object to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               duration:
 *                 type: string
 *               author:
 *                 type: string
 *               image:
 *                 type: string
 *             example:
 *                title: Learn NodeJS
 *                description: Learn NodeJS with practical exercises
 *                category: programming
 *                duration: 4 months
 *                author: Grupo 20
 *                image: https://someurl/learnNodejs.png
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       401: 
 *         description: Access token is missing or invalid
 *       400:
 *         description: Invalid request
 */
router.post('/', checkAuth([]), CourseController.create);

/**
 * @swagger
 * /course:
 *   get:
 *     summary: Get a list of all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              message: "Bad Request"
 */
router.get('/', checkAuth([]), CourseController.findAll);

/**
 * @swagger
 * /course/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the course
 *         schema:
 *           type: integer
 *         example:
 *             1
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Course not found
 */
router.get('/:courseId', checkAuth([]), CourseController.findOne);

/**
 * @swagger
 * /course/{id}:
 *   put:
 *     summary: Update a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the course
 *         schema:
 *           type: integer
 *         example:
 *           1
 *     requestBody:
 *       description: Course object to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               duration:
 *                 type: string
 *               author:
 *                 type: string
 *               image:
 *                 type: string
 *             example:
 *                title: Learn NodeJS
 *                description: Learn NodeJS with practical exercises
 *                category: programming
 *                duration: 4 months
 *                author: Grupo 20
 *                image: https://someurl/learnNodejs.png
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Course not found
 */
router.put('/:courseId', checkAuth([]), CourseController.update);

/**
 * @swagger
 * /course/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the course
 *         schema:
 *           type: integer
 *         example:
 *             1
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Course not found
 */
router.delete('/:courseId', checkAuth([]), CourseController.remove);

module.exports = router;