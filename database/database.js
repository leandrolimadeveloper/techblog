const Sequelize = require('sequelize')
const connection = new Sequelize('techblog', 'root', 'userMSQP.!x8.', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection