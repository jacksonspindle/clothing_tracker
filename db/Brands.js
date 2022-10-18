const { UUID, UUIDV4, STRING } = require('sequelize')
const conn = require('./conn')

const Brands = conn.define('brands', {
    id: {
        type: UUID, 
        defaultValue: UUIDV4, 
        primaryKey: true, 
        allowNull: false 
    }, 
    name: {
        type: STRING, 
        allowNull: false
    }, 
    genre: {
        type: STRING, 
        allowNull: true 
    }, 
    imageUrl: {
        type: STRING, 
        allowNull: true 
    }
})

module.exports = {
     Brands
}