import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { formatPrice } from "../../utils"
import './carttotal.css'


const CartTotal = () => {
    const { total_amount, shipping_fee } = useCartContext()
    return (
        <div className="cart-total-container">
            <div>
            <article>
                <h5>subtotal : <span>{formatPrice(total_amount)}</span></h5>
                <p>shipping fee : <span>{formatPrice(shipping_fee)}</span></p>
                <hr />
                <h4>
                    order Total : { ' ' }
                    <span>{formatPrice(total_amount + shipping_fee)}</span>
                </h4>
            </article>
            <Link to="/checkout" className="checkout-btn btn">proceed to checkout</Link>
            </div>
        </div>
    )
}

export default CartTotal
