const router = require('express').Router();
const { checkAuth } = require('../../middleware/auth');
const UserController = require('../../controllers/user');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - lastname
 *         - email
 *         - password
 *         - role
  *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         lastname:
 *           type: string
 *           description: The lastname of he user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         role:
 *           type: string
 *           description: The role of the user
 *         createdAt:
 *           type: date-time
 *           description: The date the user was added
 *         updatedAt:
 *           type: date-time
 *           description: The date the user was updated
 *       example:
 *         id: 1
 *         name: John
 *         lastname: Doe
 *         email: john@doe.com
 *         password: johnpasswd
 *         role: user
 */

/**
 * @swagger
 * /user:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       description: User object to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *             example:
 *               name: John
 *               lastname: Doe
 *               email: john@doe.com
 *               password: johnpasswd
 *               role: user
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
router.post('/', checkAuth([]), UserController.create);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get a list of all users
 *     tags: [Users]
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
router.get('/', checkAuth([]), UserController.findAll);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get an user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
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
 *         description: User not found
 */
router.get('/:userId', checkAuth([]), UserController.findOne);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update an user by ID
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
 *         schema:
 *           type: integer
 *         example:
 *           1
 *     requestBody:
 *       description: User object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *             example:
 *               name: John
 *               lastname: Doe
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
router.put('/:userId', checkAuth([]), UserController.update);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete an user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user
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
router.delete('/:userId', checkAuth([]), UserController.remove);

module.exports = router;