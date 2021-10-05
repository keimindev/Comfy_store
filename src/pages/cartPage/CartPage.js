import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import PageHero from '../../components/pageHero/PageHero'
import CartContent from '../../components/CartContent/CartContent'
import './cartpages.css'

function CartPage() {
    const {cart} = useCartContext();
    if(cart.length < 1){
        return <div className="page-100">
            <div className="empty">
                <h2>Your cart is empty</h2>
                <Link to="/products" className="fill-btn btn">
                    fill it
                </Link>
            </div>
        </div>
    }
    return (
        <main>
            <PageHero title='cart'/>
            <div className="page">
                <CartContent />
            </div>
        </main>
    )
}

export default CartPage
