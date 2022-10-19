const { Garments } = require('./Garments')
const { Brands } = require('./Brands')

const seed = async() => {

     const [ publicHousingSkateTeam, erd, fa, bronze56k, paradis3, supreme, pleasures, prizecard, rtfkt ] = await Promise.all([
        Brands.create({ name: 'Public Housing Skate Team', genre: 'Skate', imageUrl: 'phstLogo.gif' }),
        Brands.create({ name: 'Enfants Riches Deprimes', genre: 'Designer', imageUrl: 'https://cdn11.bigcommerce.com/s-7xrg1ndguv/product_images/uploaded_images/site_assets/ERD_LOGO_WHITE.png' }),
        Brands.create({ name: 'Fucking Awesome', genre: 'Skate', imageUrl: 'https://cdn.shopify.com/s/files/1/1263/8013/collections/c195b7714a68143fc33ba229a9474185.png?v=1618101033' }),
        Brands.create({ name: 'Bronze47k', genre: 'Skate', imageUrl: 'http://cdn.shopify.com/s/files/1/0424/0613/collections/BRONZE_GIF.gif?v=1626882876' }),
        Brands.create({ name: 'PARADIS3NYC', genre: 'Skate', imageUrl: 'https://paradise.nyc/static/media/FALL-WINTER-2021.429fd0d0.png' }),
        Brands.create({ name: 'Supreme', genre: 'Skate', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Supreme_Logo.svg/2560px-Supreme_Logo.svg.png' }),
        Brands.create({ name: 'Pleasures', genre: 'Skate', imageUrl: 'https://media.suppastore.com/media/brands/tmp/logo/PLEASURES-NOW-LOGO_large_Kopie.png' }),
        Brands.create({ name: 'Prizecard', genre: 'Designer', imageUrl: '' }),
        Brands.create({ name: 'RTFKT', genre: 'Metaverse', imageUrl: 'https://i0.wp.com/coinyuppie.com/wp-content/uploads/2021/05/3d5f4be172a0d0436b067171dff86ac4.jpg' }),
    ]) 

    const [ razorHoodie, erdPants, everdayCamo, kevinBradleyGanesh, contraband ] = await Promise.all([
        Garments.create({name: 'Razor Hoodie', garmentType: 'sweater', price: 155, size: 'M', imageUrl: 'razorHoodie.png', brandId: publicHousingSkateTeam.id, status: 'owned', state: 'physical' }),
        Garments.create({name: 'ERD Pants', garmentType: 'pant', price: 400, size: 'S', imageUrl: 'erdPants.png', brandId: erd.id, status: 'owned', state: 'physical' }),
        Garments.create({name: 'Everyday Camo Jacket', garmentType: 'jacket', price: 110, size: 'L', imageUrl: 'everydayCamoJacket.png', brandId: fa.id, status: 'owned', state: 'physical' }),
        Garments.create({name: 'Kevin Bradley Ganesh Longsleeve', garmentType: 'shirt', price: 47, size: 'L', imageUrl: 'KevinBrandleyLongSleeve.png', brandId: fa.id, status: 'owned', state: 'physical' }),
        Garments.create({name: 'Contraband Longsleeve', garmentType: 'shirt', price: 27, size: 'L', imageUrl: 'contrabandBronze.png', brandId: bronze56k.id, status: 'owned', state: 'physical' }),
        Garments.create({name: 'PORN STARS SWEATER', garmentType: 'sweater', price: 5000, size: 'M', imageUrl: 'pornStarsSweater.png', brandId: erd.id, status: 'wishlist', state: 'physical' }),
        Garments.create({name: 'Sean Pablo x Converse', garmentType: 'shoe', price: 150, size: '9', imageUrl: 'seanPabloShoes.png', brandId: paradis3.id, status: 'wishlist', state: 'physical' }),
        Garments.create({name: 'Supreme Thrills Hoodie', garmentType: 'hoodie', price: 165, size: 'L', imageUrl: 'supremeThrillsHoodie.png', brandId: supreme.id, status: 'sold', state: 'physical' }),
        Garments.create({name: 'Ronnie Spector Tee White', garmentType: 'shirt', price: 90, size: 'L', imageUrl: 'ronnieSpectorTee.png', brandId: supreme.id, status: 'sold', state: 'physical' }),
        Garments.create({name: 'A Girl Is A Gun', garmentType: 'shirt', price: 128, size: 'M', imageUrl: 'aGirlisAGun.png', brandId: pleasures.id, status: 'sold', state: 'physical' }),
        Garments.create({name: 'Relinquished Shirt', garmentType: 'shirt', price: 150, size: 'L', imageUrl: 'relinquishedShirt.png', brandId: prizecard.id, status: 'created', state: 'physical' }),
        Garments.create({name: 'Dunk Genesis CRYPTOKICK', garmentType: 'shoe', price: 750, size: 'L', imageUrl: 'cryptokick.png', brandId: rtfkt.id, status: 'owned', state: 'digital' }),
        
    ])  
}

module.exports = seed