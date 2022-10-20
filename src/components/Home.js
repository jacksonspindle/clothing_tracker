import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home-container">
            <Link to='/garments/wishlist'>Wishlist</Link>
            <Link to='/garments/owned'>My Garments</Link>
            <Link to='/garments/sold'>Sold Garments</Link>
            <Link to='/garments/created'>Created Garments</Link>
            <Link to='/garments/digital'>Digital Garments</Link>
            <div className="create-button-container">
                <Link to='/garments/create'><button className="add-button">Add Garment</button></Link>
                <Link to='/brands/create'><button className="add-button">Add Brand</button></Link>
            </div>
        </div>
    )
}

export default Home