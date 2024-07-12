const router = require('express').Router()
const AuthController = require('../../controllers/auth')


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: login
 *     tags: [Auth]
 *     requestBody:
 *       description: login with email and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *                email: john@doe.com
 *                password: mypassword
 *     responses:
 *       200:
 *         description: Authentication success
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       401:
 *         description: Email or password incorrect
 */
router.post('/login', AuthController.login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: register as a new user
 *     tags: [Auth]
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
 *                name: John
 *                lastname: Doe
 *                email: john@doe.com
 *                password: mypassword
 *                role: user
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Invalid request
 */
router.post('/register', AuthController.register)

module.exports = router