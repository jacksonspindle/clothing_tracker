const { UUID, UUIDV4, STRING, FLOAT } = require('sequelize')
const conn = require('./conn')
const Brands = require('./Brands')

const Garments = conn.define('garments', {
    id: {
        type: UUID, 
        defaultValue: UUIDV4, 
        allowNull: false, 
        primaryKey: true 
    }, 
    name: {
        type: STRING, 
        defaultValue: ''
    },
    garmentType: {
            type: STRING, 
            allowNull: false 
        },
    price: {
        type: FLOAT, 
        allowNull: true
    }, 
    size: {
        type: STRING,
        allowNull: true
    }, 
    imageUrl: {
        type: STRING, 
        allowNull: true
    } 
})

module.exports = {
    Garments 
}

