import React from 'react'
import PageHero from '../../components/pageHero/PageHero'
import Filter from '../../components/fillter/Filter'
import Sort from '../../components/sort/Sort'
import ProductList from '../../components/productlist/ProductList'
import './productsPage.css'


function Products() {
    return (
        <div className="products-container">
            <PageHero title="Products"/>
            <div className="section-center products-content">
                <Filter />
                <div>
                    <Sort/>
                    <ProductList />
                </div>
            </div>
         
        </div>
    )
}


export default Products
