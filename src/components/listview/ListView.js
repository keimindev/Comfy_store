import React from 'react'
import { Link } from 'react-router-dom'
import './listview.css'
import { formatPrice } from '../../utils'

function ListView({products}) {
    return (
        <div className="listview-container">
            {products.map( (product) => {
                const { id, image, name, price, description} = product;
                return(
                    <article key={id}>
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <h5 className="price">{formatPrice(price)}</h5>
                            <p>{description}</p>
                            <Link to={`/products/${id}`} className='btn detail-btn'>
                                Details
                            </Link>
                        </div>
                    </article>
                    
                )
            })}
            
        </div>
    )
}

export default ListView
