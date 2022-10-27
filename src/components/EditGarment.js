import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGarment, editGarment } from "../store";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditGarment = () => {
  const { garments, brands } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const garment = garments.find((garment) => garment.id === id);

  const [name, setName] = useState(garment.name);
  const [brandId, setBrandId] = useState(garment.brandId);
  const [garmentType, setGarmentType] = useState(garment.garmentType);
  const [price, setPrice] = useState(garment.price);
  const [imageUrl, setImageUrl] = useState(garment.imageUrl);
  const [size, setSize] = useState(garment.size);
  const [status, setStatus] = useState(garment.status);
  const [state, setState] = useState(garment.state);

  const submit = (ev) => {
    ev.preventDefault();
    const newGarment = {
      id,
      name,
      brandId,
      garmentType,
      price,
      imageUrl,
      size,
      status,
      state,
    };
    dispatch(editGarment(newGarment, navigate));
  };

  return (
    <div className="edit-container">
      <img
        src={
          garment.imageUrl.includes("http")
            ? `${garment.imageUrl}`
            : `../../assets/${garment.imageUrl}`
        }
        className="garment-image-small"
      ></img>
      <form className="add-garment-form" onSubmit={submit}>
        <input
          id="name"
          placeholder={garment.name}
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        ></input>
        <label htmlFor="name">Name</label>
        <input
          placeholder={garment.price}
          onChange={(ev) => {
            setPrice(ev.target.value);
          }}
        ></input>
        <label htmlFor="name">Price</label>
        <input
          placeholder={garment.imageUrl}
          onChange={(ev) => {
            setImageUrl(ev.target.value);
          }}
        ></input>
        <label htmlFor="name">Image URL</label>
        <select
          placeholder={garment.status}
          onChange={(ev) => {
            setStatus(ev.target.value);
          }}
        >
          <option>owned</option>
          <option>sold</option>
          <option>wishlist</option>
          <option>created</option>
        </select>
        <label htmlFor="name">Status</label>
        <select
          placeholder={garment.garmentType}
          onChange={(ev) => {
            setGarmentType(ev.target.value);
          }}
        >
          <option>shirt</option>
          <option>pant</option>
          <option>sweater</option>
          <option>jacket</option>
          <option>shoe</option>
        </select>
        <label htmlFor="name">Garment Type</label>
        <select
          placeholder={garment.size}
          onChange={(ev) => {
            setSize(ev.target.value);
          }}
        >
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <label htmlFor="name">Size</label>
        <select
          placeholder={garment.state}
          onChange={(ev) => {
            setState(ev.target.value);
          }}
        >
          <option>physical</option>
          <option>digital</option>
          <option>phygital</option>
        </select>
        <label htmlFor="name">State</label>
        <select
          placeholder={garment.brand}
          onChange={(ev) => {
            const brand = brands.find(
              (brand) => brand.name === ev.target.value
            ).id;
            setBrandId(brand);
          }}
        >
          <option>
            {brands.find((brand) => brand.id === garment.brandId).name}
          </option>
          {brands.map((brand) => {
            return <option key={brand.id}>{brand.name}</option>;
          })}
          <option>new brand</option>
        </select>
        <label htmlFor="name">Brand</label>
        <button className="form-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditGarment;
