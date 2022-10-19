import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addGarment } from "../store";

const AddGarment = () => {
    const { garments, brands } = useSelector(state => state)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [brandId, setBrandId] = useState('no brand specified')
    const [garmentType, setGarmentType] = useState('shirt')
    const [price, setPrice] = useState(0)
    const [imageUrl, setImageUrl] = useState('')
    const [size, setSize] = useState('S')
    const [status, setStatus] = useState('owned')
    const [state, setState] = useState('physical')

    const [newGarment, setNewGarment] = useState({})

    const submit = (ev) => {
        ev.preventDefault()
        console.log(newGarment)
        dispatch(addGarment(newGarment))
    } 

    return(
        <div>
            <form className="add-garment-form" onSubmit={submit}>
                <input id="name" placeholder="garment name..." onChange={(ev) => {
                    setName(ev.target.value)
                    setNewGarment({
                        name, 
                        brandId, 
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}></input>
                <label htmlFor="name">Name</label>
                <input placeholder="price..." onChange={(ev) => {
                    setPrice(ev.target.value)
                    setNewGarment({
                        name, 
                        brandId, 
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}></input>
                <label htmlFor="name">Price</label>
                <input placeholder="image url..."  onChange={(ev) => {
                    setImageUrl(ev.target.value)
                    setNewGarment({
                        name, 
                        brandId, 
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}></input>
                <label htmlFor="name">Image URL</label>
                <select placeholder="status" onChange={(ev) => {
                    setStatus(ev.target.value)
                    setNewGarment({
                        name, 
                        brandId, 
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}>
                    <option>owned</option>
                    <option>sold</option>
                    <option>wishlist</option>
                    <option>created</option>
                </select>
                <label htmlFor="name">Status</label>
                <select placeholder="garment type" onChange={(ev) => {
                    setGarmentType(ev.target.value)
                    setNewGarment({
                        name, 
                        brandId, 
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}>
                    <option>shirt</option>
                    <option>pant</option>
                    <option>sweater</option>
                    <option>jacket</option>
                    <option>shoe</option>
                </select>
                <label htmlFor="name">Garment Type</label>
                <select placeholder="size"onChange={(ev) => {
                    setSize(ev.target.value)
                    setNewGarment({
                        name, 
                        brandId, 
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                <label htmlFor="name">Size</label>
                <select placeholder="state"  onChange={(ev) => {
                    setState(ev.target.value)
                    setNewGarment({
                        name, 
                        brandId, 
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}>
                    <option>physical</option>
                    <option>digital</option>
                    <option>phygital</option>
                </select>
                <label htmlFor="name">State</label>
                <select placeholder="brand"  onChange={(ev) => {
                    // setBrandId(ev.target.value)
                    const test = brands.find(brand => brand.name === ev.target.value).id
                   setBrandId(test)
                    // setBrandId(_brandId)
                    console.log(`you set the brand to ${test}`)
                    setNewGarment({
                        name, 
                        brandId: test,
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                }}>
                    {
                        brands.map(brand => {
                            return(
                                <option key={brand.id}>{brand.name}</option>
                            )
                        })
                    }
                    <option>new brand</option>
                </select>
                <label htmlFor="name">Brand</label>
                <button className="form-button">Add</button>
            </form>
        </div>
    )
}

export default AddGarment