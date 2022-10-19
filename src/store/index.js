import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'

// REDUCER
const garments = (state = [], action) => {
    if(action.type === 'SET_GARMENTS') {
        return action.garments
    }
    if(action.type === 'ADD_GARMENT') {
        console.log(action.garment)
        console.log(state)
        return [...state, action.garment]
    }
    return state
}

const brands = (state = [], action) => {
    if(action.type === 'SET_BRANDS') {
        return action.brands
    }
    return state
}

// ACTION CREATORS 

const _setGarments = garments => {
    return {
        type: 'SET_GARMENTS', 
        garments
    }
}

const _addGarment = garment => {
    return {
        type: 'ADD_GARMENT', 
        garment 
    }
}

const _setBrands = brands => {
    return {
        type: 'SET_BRANDS', 
        brands
    }
}

export const setGarments = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/garments')
        dispatch(_setGarments(response.data))
    }
}

export const addGarment = (garment) => {
    return async(dispatch) => {
        const response = await axios.post('/api/garments', garment)
        dispatch(_addGarment(response.data))
    }
}

export const setBrands = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/brands')
        dispatch(_setBrands(response.data))
    }
}

const reducer = combineReducers({
    garments, 
    brands
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store