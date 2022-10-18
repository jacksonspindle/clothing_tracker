const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/clothing_tracker_db')

module.exports = conn