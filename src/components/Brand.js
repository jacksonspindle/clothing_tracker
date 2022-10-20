import React from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBrand } from "../store";

const Brand = () => {
    const { brands, garments } = useSelector(state => state)
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                            <div key={brand.id}>
                                <div className="flex-box-centered" >
                                    <h1>{brand.name}</h1>
                                    <img className="brand-image-large" src={(brand.imageUrl.includes('http')) ? `${brand.imageUrl}` : `../../assets/${brand.imageUrl}`}></img>
                                </div>
                                <div className="brand-buttons-container">
                                    <Link to={`/brands/edit/${id}`}><button className="form-button" >Edit Brand</button></Link>
                                    <button className="delete-button" onClick={() => {
                                            dispatch(deleteBrand(brand, navigate))
                                        }}>Delete Brand
                                    </button> 
                                </div>
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
                            <img className="garment-image-small" src={(garment.imageUrl.includes('http')) ? `${garment.imageUrl}` : `../../assets/${garment.imageUrl}`}></img>
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
                            <img className="garment-image-small" src={(garment.imageUrl.includes('http')) ? `${garment.imageUrl}` : `../../assets/${garment.imageUrl}`}></img>
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
                            <img className="garment-image-small" src={(garment.imageUrl.includes('http')) ? `${garment.imageUrl}` : `../../assets/${garment.imageUrl}`}></img>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Brand