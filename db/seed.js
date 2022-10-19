const { Garments } = require('./Garments')
const { Brands } = require('./Brands')

const seed = async() => {

     const [ publicHousingSkateTeam, erd, fa, bronze56k ] = await Promise.all([
        Brands.create({ name: 'Public Housing Skate Team', genre: 'Skate', imageUrl: 'phstLogo.gif' }),
        Brands.create({ name: 'Enfants Riches Deprimes', genre: 'Designer', imageUrl: 'https://cdn11.bigcommerce.com/s-7xrg1ndguv/product_images/uploaded_images/site_assets/ERD_LOGO_WHITE.png' }),
        Brands.create({ name: 'Fucking Awesome', genre: 'Skate', imageUrl: 'https://cdn.shopify.com/s/files/1/1263/8013/collections/c195b7714a68143fc33ba229a9474185.png?v=1618101033' }),
        Brands.create({ name: 'Bronze47k', genre: 'Skate', imageUrl: 'http://cdn.shopify.com/s/files/1/0424/0613/collections/BRONZE_GIF.gif?v=1626882876' }),
    ]) 

    const [ razorHoodie, erdPants, everdayCamo, kevinBradleyGanesh, contraband ] = await Promise.all([
        Garments.create({name: 'Razor Hoodie', garmentType: 'sweater', price: 155, size: 'M', imageUrl: 'razorHoodie.png', brandId: publicHousingSkateTeam.id, status: 'wishlist', state: 'physical' }),
        Garments.create({name: 'ERD Pants', garmentType: 'pant', price: 400, size: 'S', imageUrl: 'erdPants.png', brandId: erd.id, status: 'created', state: 'physical' }),
        Garments.create({name: 'Everyday Camo Jacket', garmentType: 'jacket', price: 110, size: 'L', imageUrl: 'everydayCamoJacket.png', brandId: fa.id, status: 'owned', state: 'physical' }),
        Garments.create({name: 'Kevin Bradley Ganesh Longsleeve', garmentType: 'shirt', price: 47, size: 'L', imageUrl: 'KevinBrandleyLongSleeve.png', brandId: fa.id, status: 'sold', state: 'physical' }),
        Garments.create({name: 'Contraband Longsleeve', garmentType: 'shirt', price: 27, size: 'L', imageUrl: 'contrabandBronze.png', brandId: bronze56k.id, status: 'sold', state: 'digital' }),
    ])  
}

module.exports = seed