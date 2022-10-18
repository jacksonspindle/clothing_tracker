const conn = require('./conn')
const { Garments } = require('./Garments')
const { Brands } = require('./Brands')
const seed = require('./seed')

Brands.hasMany(Garments)
Garments.belongsTo(Brands)

module.exports = {
    conn, 
    Garments,
    Brands, 
    seed
}