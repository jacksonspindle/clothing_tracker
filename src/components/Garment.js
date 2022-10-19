import React from "react";
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

const Garment = () => {
    const { garments, brands } = useSelector(state => state)
    const { id } = useParams()

    const garment = garments.filter(garment => garment.id === id)
    const garmentId = garment.find(garment => garment.id === id)
    const brand = brands.filter(brand => brand.id === garmentId.brandId)
    return (
        <div className="garment-container">
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
                                                <ul key={brand.id}>
                                                    <li >
                                                        <em> Brand: </em>
                                                        <Link to={`/brands/${brand.id}`} >{brand.name}</Link>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }
                                    <li>{garment.garmentType}</li>
                                    <li>${garment.price}</li>
                                    <li>Size: {garment.size}</li>
                                    <li>Status: <Link to={`/garments/${garment.status}`}>  {garment.status}</Link></li>
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