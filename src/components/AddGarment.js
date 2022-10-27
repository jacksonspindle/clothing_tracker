import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGarment } from "../store";
import { Navigate, useNavigate } from "react-router-dom";

const AddGarment = () => {
  const { garments, brands } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [brandId, setBrandId] = useState("no brand specified");
  const [garmentType, setGarmentType] = useState("shirt");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [size, setSize] = useState("S");
  const [status, setStatus] = useState("owned");
  const [state, setState] = useState("physical");

  const submit = (ev) => {
    ev.preventDefault();
    const newGarment = {
      name,
      brandId,
      garmentType,
      price,
      imageUrl,
      size,
      status,
      state,
    };
    dispatch(addGarment(newGarment, navigate));
  };

  return (
    <div>
      <form className="add-garment-form" onSubmit={submit}>
        <input
          id="name"
          placeholder="garment name..."
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        ></input>
        <label htmlFor="name">Name</label>
        <input
          placeholder="price..."
          onChange={(ev) => {
            setPrice(ev.target.value);
          }}
        ></input>
        <label htmlFor="name">Price</label>
        <input
          placeholder="image url..."
          onChange={(ev) => {
            setImageUrl(ev.target.value);
          }}
        ></input>
        <label htmlFor="name">Image URL</label>
        <select
          placeholder="status"
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
          placeholder="garment type"
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
          placeholder="size"
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
          placeholder="state"
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
          placeholder="brand"
          onChange={(ev) => {
            const brand = brands.find(
              (brand) => brand.name === ev.target.value
            ).id;
            setBrandId(brand);
          }}
        >
          {brands.map((brand) => {
            return <option key={brand.id}>{brand.name}</option>;
          })}
          <option>new brand</option>
        </select>
        <label htmlFor="name">Brand</label>
        <button className="form-button">Add</button>
      </form>
    </div>
  );
};

export default AddGarment;
