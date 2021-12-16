const Sequelize = require('sequelize')
const connection = new Sequelize('techblog', 'root', 'BDh04.!x815|', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection