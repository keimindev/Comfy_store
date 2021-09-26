import React from 'react'
import { useFilterContext } from '../../context/filterContext'
import { GridView, ViewAgenda, ViewList } from '@material-ui/icons';
import './sort.css'


function Sort() {
    const { filter_products : products, grid_view } = useFilterContext();
    
    return (
        <div className="sort-container"> 
            <div className="btn-container">
                <button type="button" 
                className={`${grid_view ? "view-btn view-btn-active" : "btn view-btn"}`}><ViewAgenda/></button>
                <button type="button" className={`${grid_view ? "view-btn" : "view-btn view-btn-active"}`}><ViewList/></button>
            </div>
            <p>{products.length} products found</p>
            <hr/>
            <form>
                <label htmlFor='sort'>sort by</label>
                <select name="sort" id="sort" className="sort-input">
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (A-Z)</option>
                    <option value="name-z">name (Z-A)</option>
                </select>
            </form>
        </div>
    )
}

export default Sort
