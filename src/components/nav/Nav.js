import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { ShoppingCart, AccountCircle, Menu } from '@material-ui/icons'
import { useProductsContext } from '../../context/productsContext'
import { useCartContext } from '../../context/CartContext'


function Nav() {
    const {openSidebar} = useProductsContext()
    const {total_items} = useCartContext()
    return (
        <>
        <div className="navbar-container">
            <div className="nav">
            <div className="logo">
                <img src="./assets/comfy-logo.png" alt="logo" />
            </div>
            <div className="menu">
                <Link to="/">
                <div>Home</div>
                </Link>
                <Link to="/about">
                <div>About</div>
                </Link>
                <Link to="/products">
                <div>Products</div>
                </Link>
            </div>
            <div className="icons">
                <Link to="/cart">
                <div classNam="cart">
                    <p>Cart</p>
                    <div className="icon">
                    <ShoppingCart />
                    <span>{total_items}</span>
                    </div>
                </div>
                </Link>
                <Link to="/login">
                <div classNam="login">
                    <p>Login</p>
                    <div className="icon">
                    <AccountCircle/>
                    </div>
                </div>
                </Link>
            </div>
            <button type="button" className="nav-toggle" onClick={openSidebar}><Menu className="icon" /></button>
            </div>
        </div>

        </>
    )
}

export default Nav
