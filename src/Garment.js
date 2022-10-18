import React from "react";
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

const Garment = () => {
    const { garments, brands } = useSelector(state => state)
    const { id } = useParams()

    const garment = garments.filter(garment => garment.id === id)
    const garmentId = garment.find(garment => garment.id === id)
    const brand = brands.filter(brand => brand.id === garmentId.brandId)
    console.log(garmentId)
    return (
        <div>
            {
            garment &&
                <div>
                    {
                        garment.map(garment => {
                            return (
                                <div key={garment.id}>
                                    <li >{garment.name}</li>
                                    <img src={`../../assets/${garment.imageUrl}`} className='garment-image-small'></img>
                                    
                                    {
                                        brand.map(brand => {
                                            return(
                                                <p key={brand.id}>
                                                     Brand:
                                                    <Link to={`/brands/${brand.id}`} >{brand.name}</Link>
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Garment 