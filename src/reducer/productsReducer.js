import react from 'react';
import {
SIDEBAR_OPEN,
SIDEBAR_CLOSE
} from '../action/action'


const productsReducer = (state, action) => {
    if(action.type === SIDEBAR_OPEN){
        return{ ...state, isSidebarOpen:true }
    }

    if(action.type === SIDEBAR_CLOSE){
        return{ ...state, isSidebarOpen:false }
    }
    return state
    throw new Error ('Mo Matching "${action.type}" - action type')
}

export default productsReducer