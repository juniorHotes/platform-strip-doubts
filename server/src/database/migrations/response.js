const Sequelize = require('sequelize')
const connection = require('../connection')

const Response = connection.define('responses', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Response.sync({ force: false })

module.exports = Response