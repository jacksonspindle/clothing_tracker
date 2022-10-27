import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addBrand } from "../store";

const AddBrand = () => {
  const { garments, brands } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [genre, setGenre] = useState("");

  const submit = (ev) => {
    ev.preventDefault();
    const newGarment = {
      name,
      imageUrl,
      genre,
    };
    console.log(newGarment);
    dispatch(addBrand(newGarment, navigate));
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
          placeholder="genre..."
          onChange={(ev) => {
            setGenre(ev.target.value);
          }}
        ></input>
        <label htmlFor="genre">Genre</label>
        <input
          placeholder="image url..."
          onChange={(ev) => {
            setImageUrl(ev.target.value);
          }}
        ></input>
        <label htmlFor="imageUrl">Image URL</label>
        <button className="form-button">Add</button>
      </form>
    </div>
  );
};

export default AddBrand;
