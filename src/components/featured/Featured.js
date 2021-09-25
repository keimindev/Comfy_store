import React from 'react'
import { useProductsContext } from '../../context/productsContext'
import Loading from '../loading/Loading'
import Product from '../product/Product'
import './featured.css'

function Featured() {
    const { products_loading:loading, products_error: error, featured_products:featured} = useProductsContext()
    if(loading){
        return <Loading />
    }

    if(error){
        return (
            <>
             <h2>There was an error...</h2>
            </>
        )
    }
    return (
        <div className="featured-container">
            <div className="section">
                <div className="title">
                    <h2>Featured Products</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center featured">
                    {featured.slice(0,3).map((product) => {
                      return (<Product key={product.id} {...product} />)
                    })}
                </div>
            </div> 
        </div>
    )
}

export default Featured
