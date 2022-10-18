const express = require('express')
const app = express()
const path = require('path')
const { conn, seed, Garments } = require('../db')

app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/api/garments', async(req, res, next) => {
    try {
         Garments.findAll()
        .then( garment => res.send(garment))
        .catch(next)
    } catch (ex) {
        next(ex)
    }
})

const init = async() => {
    try {
        await conn.sync({ force:true })
        await seed()
    } catch (ex) {
        console.log(ex)
    }
}

init()

module.exports = app