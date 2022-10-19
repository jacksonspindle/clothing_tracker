import React, { useEffect } from 'react'
import Garments from './components/Garments'
import { setBrands, setGarments } from './store'
import { useDispatch } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Brands from './components/Brands'
import Brand from './components/Brand'
import Garment from './components/Garment'
import GarmentsWishlist from './components/GarmentsWishlist'
import SoldGarments from './components/SoldGarments'
import OwnedGarments from './components/OwnedGarments'
import CreatedGarments from './components/CreatedGarments'
import DigitalGarments from './components/DigitalGarments'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setGarments())
        dispatch(setBrands())
    }, [])

    return(
        <div>
            <nav className='nav'>
                <Link to='/'>Home</Link>
                /
                <Link to='/garments'>Garments</Link>
                /
                <Link to='/brands'>Brands</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/garments' element={<Garments/>}></Route>
                <Route path='/garments/digital' element={<DigitalGarments/>}></Route>
                <Route path='/garments/owned' element={<OwnedGarments/>}></Route>
                <Route path='/garments/wishlist' element={<GarmentsWishlist/>}></Route>
                <Route path='/garments/sold' element={<SoldGarments/>}></Route>
                <Route path='/garments/created' element={<CreatedGarments/>}></Route>
                <Route path='/garments/:id' element={<Garment/>}></Route>
                <Route path='/brands' element={<Brands/>}></Route>
                <Route path='/brands/:id' element={<Brand/>}></Route>
            </Routes>
        </div>
    )
}

export default App 