const swaggerJSDoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express")

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "DongyangOne Api"
        },
        servers: [
            {
                url: "http://192.168.0.26:8000"
            }
        ] 
    },
    apis: ["./swagger/*.js", "./swagger/*/*.js"]
}

const specs = swaggerJSDoc(options)

module.exports = {swaggerUi, specs}