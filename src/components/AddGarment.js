import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addGarment } from "../store";

const CreateGarment = () => {
    const { garments, brands } = useSelector(state => state)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [brandId, setBrandId] = useState('')
    const [garmentType, setGarmentType] = useState('')
    const [price, setPrice] = useState(0)
    const [imageUrl, setImageUrl] = useState('')
    const [size, setSize] = useState('')
    const [status, setStatus] = useState('')
    const [state, setState] = useState('')

    const [newGarment, setNewGarment] = useState({})

    const submit = (ev) => {
        ev.preventDefault()
        console.log(newGarment)
        dispatch(addGarment(newGarment))
    } 

    return(
        <div>
            <form onSubmit={submit}>
                <input placeholder="garment name..." onChange={(ev) => {
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
                <input placeholder="image url..." onChange={(ev) => {
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
                <select placeholder="size" onChange={(ev) => {
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
                <select placeholder="state" onChange={(ev) => {
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
                <select placeholder="brand" onChange={(ev) => {
                    setBrandId(ev.target.value)
                    const _brandId = brands.find(brand => brand.name === ev.target.value)
                    setBrandId(_brandId)
                    console.log(_brandId)
                    setNewGarment({
                        name, 
                        brandId: _brandId.id,
                        garmentType, 
                        price, 
                        imageUrl, 
                        status, 
                        state,
                        size
                    })
                    console.log(newGarment)
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
                <button>Add</button>
            </form>
        </div>
    )
}

export default CreateGarment