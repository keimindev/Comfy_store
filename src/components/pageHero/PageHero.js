import React from 'react'
import { Link } from 'react-router-dom'
import './pagehero.css'

function PageHero( {title, product}) {
    return (
        <div className="pagehero-container">
            <h4>
                <Link to="/">Home </Link>
                {product && <Link to="/products">/ Product </Link>} / {title}
            </h4>
        </div>
    )
}

export default PageHero
