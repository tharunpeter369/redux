import { ActionTypes } from "../constants/action-types";


const initialState = {
    products: [],
}

//in action we have type and payload {type: 'SET_PRODUCTS', payload: products}
export const productReducer = (state = initialState, action) => {
    console.log(initialState, "1");
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            console.log("hello");
            return {
                ...state, products: action.payload
            }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = initialState, action) => {
    console.log(initialState, "2");
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            console.log("hiii");
            return {
                ...state,
                ...action.payload
            }
        case (ActionTypes.REMOVE_SELECTED_PRODUCT):
            console.log("oiii");
            return {}
        default:
            return state;
    }
}

