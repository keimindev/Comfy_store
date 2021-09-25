import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from '@material-ui/icons'
import './product.css'
import { formatPrice } from '../../utils'

function Product({ image, name, price, id}) {
    return (
        <>
        <div className="product-container">
            <img src={image} alt="product"/>
            <Link to={`/products/${id}`} className="Link">
                <Search />
            </Link>
        <div className="product-container--footer">
            <h5>{name}</h5>
            <p>{formatPrice(price)}</p>
        </div>
        </div>
        </>
    )
}

export default Product
