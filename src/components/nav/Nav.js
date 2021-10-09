import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { ShoppingCart, AccountCircle, Menu} from '@material-ui/icons'
import { useProductsContext } from '../../context/productsContext'
import { useCartContext } from '../../context/CartContext'
import { useAuthContext } from '../../context/AuthContext'
 


function Nav() {
    const {openSidebar} = useProductsContext()
    const {total_items} = useCartContext()
    const { loginWithRedirect, myUser, logout } = useAuthContext();
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
                <div className="cart">
                    <p>Cart</p>
                    <div className="icon">
                    <ShoppingCart />
                    <span>{total_items}</span>
                    </div>
                </div>
                </Link>
                {myUser ? ( 
                <div className="login" onClick={() => logout({retrunTo:window.location.origin})}>
                    <p>Logout</p>
                    <div className="icon">
                    <AccountCircle/>
                    </div>
                </div>
                ) : (
                    <div className="login" onClick={loginWithRedirect}>
                    <p>Login</p>
                    <div className="icon">
                    <AccountCircle/>
                    </div>
                    </div>
                )}
            </div>
            <button type="button" className="nav-toggle" onClick={openSidebar}><Menu className="icon" /></button>
            </div>
        </div>

        </>
    )
}

export default Nav
