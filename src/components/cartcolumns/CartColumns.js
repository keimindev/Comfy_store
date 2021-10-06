import React from 'react'
import './cartcolumns.css'

const CartColumns = () => {
    return (
        <div className="cartcolumns-container">
        <div className="content">
            <h5>Item</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>subtotal</h5>
            <span></span>
        </div>
        <hr />
        
        </div>
    )
}


export default CartColumns
