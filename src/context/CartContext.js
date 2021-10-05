import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/CartReducer';
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART,
    COUNT_CART_TOTALS,
} from '../action/action'


const initialState={
    cart : [],
    total_items: 0,
    total_amount: 0,
    shpping_fee: 534,
}

const CartContext = React.createContext()

export const CartProvider = ( {children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //add to Cart
    const addToCart = (id, color, amount, product) => {
        dispatch({type:ADD_TO_CART, payload: {id, color, amount, product} } )

    }

    //remove Item
    const removeItem = (id) => {}

    //toggle amount 
    const toggleAmount = (id,value) => {}

    //clear cart
    const clearCart = () => {}

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(state.cart))

    }, [state.cart])

 return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>{children}</CartContext.Provider>
 )
} 

export const useCartContext = () => {
    return useContext(CartContext)
}