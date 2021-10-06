import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartColumns from '../cartcolumns/CartColumns'
import CartItem from '../cartitem/CartItem'
import CartTotal from '../carttotal/CartTotal'
import './cartcontent.css'

const CartContent = () => {
    const { cart, clearCart } = useCartContext()
    return (
        <div className="section section-center">
            <CartColumns />
            {cart.map( (item) => {
               return (
                   <CartItem key={item.id}  {...item} />
               )
            })}
            <hr/>
            <div className="link-container">
                <Link to="/products" className="link-btn">Continue shopping</Link>
                <button type="button" className="link-btn clear-cart-btn" onClick={clearCart}>Clear shopping cart</button>
            </div>
            <CartTotal />
            
        </div>
    )
}

export default CartContent
