const express = require('express')
const app = express()
const path = require('path')
const { conn, seed, Garments, Brands } = require('../db')

app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.use('/assets', express.static('assets'))

app.get('/api/garments', async(req, res, next) => {
    try {
         Garments.findAll()
        .then( garment => res.send(garment))
        .catch(next)
    } catch (ex) {
        next(ex)
    }
})

app.put('/api/garments/:id', async(req, res, next) => {
    try {
         const garment = await Garments.findByPk(req.params.id)
         await garment.update(req.body)
         res.send(garment)
    } catch (ex) {
        next(ex)
    }
})

app.post('/api/garments', async(req, res, next) => {
    try {
        res.send(await Garments.create(req.body))
    } catch (ex) {
        next(ex)
    }
})

app.delete('/api/garments/:id', async(req, res, next) => {
    try {
        const garment = await Garments.findByPk(req.params.id)
        garment.destroy()
        res.sendStatus(204);
    } catch (ex) {
        next(ex)
    }
})

app.get('/api/brands', async(req, res, next) => {
    try {
         Brands.findAll()
        .then( brand => res.send(brand))
        .catch(next)
    } catch (ex) {
        next(ex)
    }
})

app.put('/api/brands/:id', async(req, res, next) => {
    try {
         const brand = await Brands.findByPk(req.params.id)
         await brand.update(req.body)
         res.send(brand)
    } catch (ex) {
        next(ex)
    }
})

app.post('/api/brands', async(req, res, next) => {
    try {
        res.send(await Brands.create(req.body))
    } catch (ex) {
        next(ex)
    }
})

app.delete('/api/brands/:id', async(req, res, next) => {
    try {
        const brand = await Brands.findByPk(req.params.id)
        brand.destroy()
        res.sendStatus(204);
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