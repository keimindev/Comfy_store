import React from 'react'
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

function filterReducer(state, action) {
    if(action.type === LOAD_PRODCUTS){
        return {
            ...state, 
            all_products: [...action.payload],
            filter_products: [...action.payload]
        }
    }
    return state
    throw new Error(`No matching "${action.type}" - action type"`)
}

export default filterReducer
