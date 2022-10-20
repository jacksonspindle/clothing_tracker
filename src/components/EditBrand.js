import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { editBrand } from "../store";
import { useNavigate, useParams } from "react-router-dom";

const EditBrand = () => {
    const { garments, brands } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

   
    const brand = brands.find(brand => brand.id === id)
    console.log(brand)
    const [name, setName] = useState(brand)
    const [imageUrl, setImageUrl] = useState(brand)

    const submit = (ev) => {
        ev.preventDefault()
        const newBrand = {
            id,
            name, 
            imageUrl, 
        }
        console.log(newBrand)
        dispatch(editBrand(newBrand, navigate))
    } 
    
    return(
         <div>
            <form className="add-garment-form" onSubmit={submit}>
                <input id="name" placeholder={''} onChange={(ev) => {
                    setName(ev.target.value)
                }}></input>
                <label htmlFor="name">Name</label>
                <input id="imageUrl" placeholder={'imageUrl'} onChange={(ev) => {
                    setImageUrl(ev.target.value)
                }}></input>
                <label htmlFor="imageUrl">Image URL</label>
                <button className="form-button">Add</button>
            </form>
        </div>
    )
}

export default EditBrand