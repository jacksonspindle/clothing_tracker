import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deleteGarment } from "../store";

const Garment = () => {
    const { garments, brands } = useSelector(state => state)
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                                    <img src={(garment.imageUrl.includes('http')) ? `${garment.imageUrl}` : `../../assets/${garment.imageUrl}`} className='garment-image-small'></img>
                                    
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
                                    <br></br> 
                                   <Link to={`/garments/edit/${id}`}><button className="form-button" >Edit Garment
                                    </button> </Link>
                                     <br></br> 
                                    <button className="delete-button" onClick={() => {
                                            dispatch(deleteGarment(garment, navigate))
                                        }}>Delete Garment
                                    </button> 
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