import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/productsReducer';
import axios from 'axios';
import { products_url as url } from '../utils';
import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
    } from '../action/action'


const initialState = {
    isSidebarOpen:false,
}
const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
        
    const openSidebar = () => {
        dispatch({type:SIDEBAR_OPEN})
    }

    const closeSidebar = () => {
        dispatch({type:SIDEBAR_CLOSE})
    }


    const fetchProducts = async(url) => {
        const response = await axios.get(url) 
        console.log(response)
    }

    useEffect(() => {
       fetchProducts(url)
    } , [])

    return(
        <ProductsContext.Provider 
        value={{...state, openSidebar, closeSidebar}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () =>{
    return useContext(ProductsContext)
} 
