import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios'

// REDUCER
const garments = (state = [], action) => {
    if(action === "SET_GARMENTS") {
        return action.garments
    }
    return state
}

// ACTION CREATORS 

const _setGarments = (garments) => {
    return {
        type: "SET_GARMENTS", 
        garments
    }
}

export const setGarments = async() => {
    return async(dispatch) => {
        const response = await axios.get('/api/garments')
        dispatch(_setGarments(response.data))
    }
}

const reducer = combineReducers({
    garments
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store