import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";

// REDUCER
const garments = (state = [], action) => {
  if (action.type === "SET_GARMENTS") {
    return action.garments;
  }
  if (action.type === "ADD_GARMENT") {
    return [...state, action.garment];
  }
  if (action.type === "DELETE_GARMENT") {
    return state.filter((garment) => garment.id !== action.garment.id);
  }
  if (action.type === "EDIT_GARMENT") {
    return state.map((garment) =>
      garment.id === action.garment.id ? action.garment : garment
    );
  }
  return state;
};

const brands = (state = [], action) => {
  if (action.type === "SET_BRANDS") {
    return action.brands;
  }
  if (action.type === "ADD_BRAND") {
    return [...state, action.brand];
  }
  if (action.type === "DELETE_BRAND") {
    return state.filter((brand) => brand.id !== action.brand.id);
  }
  if (action.type === "EDIT_BRAND") {
    return state.map((brand) =>
      brand.id === action.brand.id ? action.brand : brand
    );
  }
  return state;
};

// ACTION CREATORS

const _setGarments = (garments) => {
  return {
    type: "SET_GARMENTS",
    garments,
  };
};

const _addGarment = (garment) => {
  return {
    type: "ADD_GARMENT",
    garment,
  };
};

const _deleteGarment = (garment) => {
  return {
    type: "DELETE_GARMENT",
    garment,
  };
};

const _editGarment = (garment) => {
  return {
    type: "EDIT_GARMENT",
    garment,
  };
};

const _setBrands = (brands) => {
  return {
    type: "SET_BRANDS",
    brands,
  };
};

const _addBrand = (brand) => {
  return {
    type: "ADD_BRAND",
    brand,
  };
};

const _deleteBrand = (brand) => {
  return {
    type: "DELETE_BRAND",
    brand,
  };
};

const _editBrand = (brand) => {
  return {
    type: "EDIT_BRAND",
    brand,
  };
};

export const setGarments = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/garments");
    dispatch(_setGarments(response.data));
  };
};

export const addGarment = (garment, navigate) => {
  return async (dispatch) => {
    const response = await axios.post("/api/garments", garment);
    navigate(`/garments`);
    dispatch(_addGarment(response.data));
  };
};

export const deleteGarment = (garment, navigate) => {
  return async (dispatch) => {
    await axios.delete(`/api/garments/${garment.id}`);
    navigate(`/garments`);
    dispatch(_deleteGarment(garment));
  };
};

export const editGarment = (garment, navigate) => {
  return async (dispatch) => {
    const response = await axios.put(`/api/garments/${garment.id}`, garment);
    navigate(`/garments`);
    dispatch(_editGarment(response.data));
  };
};

export const setBrands = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/brands");
    dispatch(_setBrands(response.data));
  };
};

export const addBrand = (brand, navigate) => {
  return async (dispatch) => {
    const response = await axios.post("/api/brands", brand);
    navigate(`/brands`);
    dispatch(_addBrand(response.data));
  };
};

export const deleteBrand = (brand, navigate) => {
  return async (dispatch) => {
    await axios.delete(`/api/brands/${brand.id}`);
    navigate(`/brands`);
    dispatch(_deleteBrand(brand));
  };
};

export const editBrand = (brand, navigate) => {
  return async (dispatch) => {
    const response = await axios.put(`/api/brands/${brand.id}`, brand);
    navigate(`/brands`);
    dispatch(_editBrand(response.data));
  };
};

const reducer = combineReducers({
  garments,
  brands,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
