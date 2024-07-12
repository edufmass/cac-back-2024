const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const { host, port, apidom, apiurl } = require('./config/configs');
const path = require('path');

const serverUrl = (port == '80') ? apidom + apiurl : apidom + ':' + port + apiurl;

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Grupo 20 API',
            version: '1.0.0',
            description: 'CaC2024 backend API in NodeJS',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    in: 'header',
                    name: 'Authorization',
                    description: 'Bearer Token',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            }
        ],
        servers: [
            {
                url: serverUrl,
            },
        ],
    },
    apis: [path.join(process.cwd(), './src/routes/**/*.js')],
}

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
}