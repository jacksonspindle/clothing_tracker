import React from "react";
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Brand = () => {
    const { brands, garments } = useSelector(state => state)
    const { id } = useParams()

    const brand = brands.filter(brand => brand.id === id)
    const garment = garments.filter(garment => garment.brandId === id)
    const garmentOwned = garment.filter(garment => garment.status === 'owned')
    const garmentWished = garment.filter(garment => garment.status === 'wishlist')
    const garmentsSold = garment.filter(garment => garment.status === 'sold')

    return (
        <div className="brand-container">
            {
            brand && 
                <div >
                    {brand.map(brand => {
                        return (
                            <div className="flex-box-centered" key={brand.id}>
                                <h1>{brand.name}</h1>
                                <img className="brand-image-large" src={(brand.imageUrl.includes('http')) ? `${brand.imageUrl}` : `../../assets/${brand.imageUrl}`}></img>
                            </div>
                        )
                    })}
                </div>
                
            }

            <h3>Garments You Own:</h3>
            <div className="brand-garment-container">
                {garmentOwned.map(garment => {
                    return(
                       <Link key={garment.id} to={`/garments/${garment.id}`}>
                            <li className="center-text">{garment.name}</li>
                            <img className="garment-image-small" src={`../../assets/${garment.imageUrl}`}></img>
                        </Link>
                    )
                })}
            </div>

            <h3>Garments You Want:</h3>
            <div className="brand-garment-container">
                {garmentWished.map(garment => {
                    return(
                       <Link key={garment.id} to={`/garments/${garment.id}`}>
                            <li className="center-text">{garment.name}</li>
                            <img className="garment-image-small" src={`../../assets/${garment.imageUrl}`}></img>
                        </Link>
                    )
                })}
            </div>

            <h3>Garments You Sold:</h3>
            <div className="brand-garment-container">
                {garmentsSold.map(garment => {
                    return(
                       <Link key={garment.id} to={`/garments/${garment.id}`}>
                            <li className="center-text">{garment.name}</li>
                            <img className="garment-image-small" src={`../../assets/${garment.imageUrl}`}></img>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Brand