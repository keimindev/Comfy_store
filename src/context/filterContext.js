import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/filterReducer';
import { useProductsContext } from './productsContext'
import {
    LOAD_PRODCUTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    FILTER_PRODUCTS,
    UPDATE_FILTERS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    CLEAR_FILTERS,
} from '../action/action'


const initialState={
    filter_products: [],
    all_products: [],
    grid_view:true,
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const { products } = useProductsContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type: LOAD_PRODCUTS, payload:products})
    }, [products])
    
    return (
        <FilterContext.Provider 
        value={{...state,}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext)
} 

