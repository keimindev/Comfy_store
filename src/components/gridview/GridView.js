import React from 'react'
import './gridview.css'
import Product from '../product/Product'

function GridView({products}) {
    return (
        <div className="gridview-container">
            {products.map((product) => {
                return <Product key={product.id} {...product} />
            })}
            
        </div>
    )
}

export default GridView
