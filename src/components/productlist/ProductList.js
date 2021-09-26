import React from 'react'
import { useFilterContext } from '../../context/filterContext'
import GridView from '../gridview/GridView'
import ListView from '../listview/ListView'
import './productlist.css'

function ProductList() {
    const { filter_products: products, grid_view} = useFilterContext()

    if(products.length < 1){
       return( <h5 style={{textTransform: 'none'}}>
            Sorry, no products matched your search...
        </h5>
       )}

    if(grid_view === false){
        return <ListView products={products} />
    }
    return (
        <GridView products={products}>Product list</GridView>
    )
}

export default ProductList
