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
        </div>
    )
}

export default Home