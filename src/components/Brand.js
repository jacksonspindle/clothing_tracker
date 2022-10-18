import React from "react";
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Brand = () => {
    const { brands, garments } = useSelector(state => state)
    const { id } = useParams()

    const brand = brands.filter(brand => brand.id === id)
    const garment = garments.filter(garment => garment.brandId === id)

    return (
        <div>
            {
            brand && 
                <div >
                    {brand.map(brand => {
                        return (
                            <div key={brand.id}>
                                <h1>{brand.name}</h1>
                                <img className="brand-image-large" src={(brand.imageUrl.includes('http')) ? `${brand.imageUrl}` : `../../assets/${brand.imageUrl}`}></img>
                            </div>
                        )
                    })}
                </div>
                
            }

            <h3>Garments You Own:</h3>
            <div>
                {garment.map(garment => {
                        console.log(garment.imageUrl.includes('http'))

                    return(
                       <Link key={garment.id} to={`/garments/${garment.id}`}>
                            <li >{garment.name}</li>
                            <img className="garment-image-small" src={`../../assets/${garment.imageUrl}`}></img>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Brand