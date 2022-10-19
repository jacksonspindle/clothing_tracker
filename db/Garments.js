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
    }, 
    status: {
        type: STRING, 
        validate: {
            isIn: [['wishlist', 'owned', 'sold', 'created']]
        }
    },
    state: {
        type: STRING,
        validate: {
            isIn: [['physical', 'digital', 'phygital']]
        }
    }
    
})

module.exports = {
    Garments 
}

