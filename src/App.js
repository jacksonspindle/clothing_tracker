import React, { useEffect } from 'react'
import Garments from './components/Garments'
import { setBrands, setGarments } from './store'
import { useDispatch } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Brands from './components/Brands'
import Brand from './components/Brand'
import Garment from './Garment'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setGarments())
        dispatch(setBrands())
    }, [])

    return(
        <div>
            <h1>Clothing Tracker</h1>
            <nav className='nav'>
                <Link to='/'>Home</Link>
                /
                <Link to='/Garments'>Garments</Link>
                /
                <Link to='/Brands'>Brands</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/garments' element={<Garments/>}></Route>
                <Route path='/garments/:id' element={<Garment/>}></Route>
                <Route path='/brands' element={<Brands/>}></Route>
                <Route path='/brands/:id' element={<Brand/>}></Route>
            </Routes>
        </div>
    )
}

export default App 