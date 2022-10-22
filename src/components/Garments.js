import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Garments = () => {
    const { garments } = useSelector(state => state)
    const dispatch = useDispatch()

    const [filterState, setFilterState] = useState("")
    const [filterChoice, setFilterChoice] = useState('shirt')

    console.log(filterState)
    return(
        <div className='garment-container'>
            <div>
            <ul>Garment Type:
                <li onClick={() => {
                    setFilterState("garment => garment.garmentType === 'shirt'")
                    setFilterChoice('shirt')
                }}>Shirts</li>
                <li onClick={() => {
                    setFilterState("garment => garment.garmentType === 'pant'")
                    setFilterChoice('pant')
                }}>Pants</li>
                <li onClick={() => {
                    setFilterState("garment => garment.garmentType === 'jacket'")
                    setFilterChoice('jacket')
                }}>Jackets</li>
                <li onClick={() => {
                    setFilterState("garment => garment.garmentType === 'hoodie'")
                    setFilterChoice('hoodie')
                }}>Hoodies</li>
                <li onClick={() => {
                    setFilterState("garment => garment.garmentType === 'sweater'")
                    setFilterChoice('sweater')
                }}>Sweaters</li>
                <li onClick={() => {
                    setFilterState("garment => garment.garmentType === 'shoe'")
                    setFilterChoice('shoe')
                }}>Shoes</li>
            </ul>
            <ul>Size:
                <li onClick={() => {
                    setFilterState("garment => garment.size === 'S'")
                    setFilterChoice('S')
                }}>Small</li>
                <li>Medium</li>
                <li>Large</li>
                <li>X Large</li>
            </ul>
            <ul>Price:
                <li>$ 0-100</li>
                <li>$ 100-300</li>
                <li>$ 300-800</li>
                <li>$ 800 +</li>
            </ul>
        </div>
            <ul className='garment'>
                {
                    garments.filter((filterState === '') ? (garment => garment.id !== null) : (garment => garment.size === filterChoice)).map(garment => {
                        return(
                            <div   key={garment.id}>
                               <Link className='' to={`/garments/${garment.id}`}>
                                    <li >{garment.name}</li>
                                    <img className='garment-image-small' src={(garment.imageUrl.includes('http')) ? `${garment.imageUrl}` : `../../assets/${garment.imageUrl}`}></img>
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Garments