const Sequelize = require('sequelize')

const connection = new Sequelize('Platform_Strip_Doubts', 'root', 'junior150692', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection