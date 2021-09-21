import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { ShoppingCart, AccountCircle, Menu } from '@material-ui/icons'
import { useProductsContext } from '../../context/productsContext'


function Nav() {
    const {openSidebar} = useProductsContext()
    return (
        <>
        <div className="navbar-container">
            <div className="logo">Comfy</div>
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
                    <span>3</span>
                    </div>
                </div>
                </Link>
                <div classNam="login">
                    <p>Login</p>
                    <div className="icon">
                    <AccountCircle/>
                    </div>

                </div>
            </div>
            <button type="button" className="nav-toggle" onClick={openSidebar}><Menu /></button>

        </div>

        </>
    )
}

export default Nav
