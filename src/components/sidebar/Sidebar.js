import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, AccountCircle, Menu, Close } from '@material-ui/icons'
import './sidebar.css';
import {useProductsContext } from '../../context/productsContext'
import { useCartContext } from '../../context/CartContext';
import { useAuthContext } from '../../context/AuthContext';



function Sidebar() {
    const {total_items} = useCartContext()
    const {isSidebarOpen, closeSidebar} = useProductsContext()
    const { myUser, loginWithRedirect, logout } = useAuthContext()
    
    return (
        <div className={`${isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
            <div className="sidebar-top">
                <img src="./assets/comfy-logo.png" alt="logo" className="logo"/>
                <button className="close-btn" onClick={closeSidebar}><Close className="icon"/></button>
            </div>
            <div className="sidebar-middle">
                <Link to="/" onClick={closeSidebar}>
                <div >Home</div>
                </Link>
                <Link to="/about" onClick={closeSidebar}>
                <div >About</div>
                </Link>
                <Link to="/products" onClick={closeSidebar}>
                <div>Products</div>
                </Link>
            </div>
            <div className="sidebar-bottom">
            <Link to="/cart" onClick={closeSidebar}>
                <div className="cart">
                    <p>Cart</p>
                    <div className="icon">
                    <ShoppingCart />
                    <span>{total_items}</span>
                    </div>
                </div>
                </Link>
                {myUser ? (
                  <div className="login" onClick={ () => logout({returnTo:window.location.origin})}>
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
            
        </div>
    )
}

export default Sidebar
