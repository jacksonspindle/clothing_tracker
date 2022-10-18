const conn = require('./conn')
const Garments = require('./Garments')

const seed = async() => {
    const [ razorHoodie ] = await Promise.all([
        Garments.create({name: 'Razor Hoodie', garmentType: 'sweater', price: 0, size: 'M', brand: 'Public Housing Skate Team' })
    ])  
}

module.exports = {
    conn, 
    Garments,
    seed
}