//make http request to backend and add it to cart

import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => { //getState is apart of redux thunk
    const { data } = await axios.get(`/api/products/${id}`)
    
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    //set item to local storage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

//remove item from cart with id
export const removeFromCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    //update localstorage...update cart
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}